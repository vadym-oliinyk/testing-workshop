import React from 'react';
import Grid from '@material-ui/core/Grid';

import getTotalPrice from '../../utils/products/getTotalPrice';

import CartCard from './components/CartCard';
import EmptyCart from './components/EmptyCart';
import CartFooter from './components/CartFooter';
import { CartProps } from './types';

export default function Cart({
  products,
  onAmountChange,
}: CartProps): JSX.Element {
  const totalPrice = getTotalPrice(products);

  if (!products.length) {
    return <EmptyCart />;
  }

  return (
    <>
      <Grid container spacing={2} justifyContent="center">
        {products.map(({ id, image, title, price, inCartAmount }) => (
          <Grid item xs={10} key={id}>
            <CartCard
              image={image}
              title={title}
              price={price}
              inCartAmount={inCartAmount}
              onLess={() => onAmountChange(id, inCartAmount - 1)}
              onMore={() => onAmountChange(id, inCartAmount + 1)}
            />
          </Grid>
        ))}

        <CartFooter totalPrice={totalPrice} />
      </Grid>
    </>
  );
}
