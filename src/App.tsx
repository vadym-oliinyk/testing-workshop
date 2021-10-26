import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { Switch, Route } from 'react-router-dom';

import getProducts from './api/getProducts';
import {
  formatProducts,
  getProductsInCart,
  addToCart,
  removeFromCart,
  changeInCartAmount,
} from './utils/products';

import Catalog from './components/Catalog';
import Cart from './components/Cart';
import Header from './components/Header';

export default function App(): JSX.Element {
  const [products, setProducts] = useState<FormattedProduct[]>([]);

  const productsInCart = getProductsInCart(products);

  function onAddToCart(productId: number) {
    const newProducts = addToCart(products, productId);
    setProducts(newProducts);
  }

  function onRemoveFromCart(productId: number) {
    const newProducts = removeFromCart(products, productId);
    setProducts(newProducts);
  }

  function onAmountChange(productId: number, amount: number) {
    const newProducts = changeInCartAmount(products, productId, amount);
    setProducts(newProducts);
  }

  useEffect(() => {
    getProducts().then((fetchedProducts) => {
      const formattedProducts = formatProducts(fetchedProducts);
      setProducts(formattedProducts);
    });
  }, []);

  return (
    <>
      <Container maxWidth="md">
        <Header inCartAmount={productsInCart.length} />
      </Container>
      <Container maxWidth="sm">
        <Switch>
          <Route exact path="/">
            <Catalog
              products={products}
              onAddToCart={onAddToCart}
              onRemoveFromCart={onRemoveFromCart}
            />
          </Route>
          <Route path="/cart">
            <Cart products={productsInCart} onAmountChange={onAmountChange} />
          </Route>
        </Switch>
      </Container>
    </>
  );
}
