import React from 'react';
import Grid from '@material-ui/core/Grid';

import EmptyCatalog from './components/EmptyCatalog';
import CatalogCard from './components/CatalogCard';
import { CatalogProps } from './types';

export default function Catalog({
  products,
  onAddToCart,
  onRemoveFromCart,
}: CatalogProps): JSX.Element {
  if (!products.length) {
    return <EmptyCatalog />;
  }

  return (
    <Grid container spacing={2}>
      {products.map(({ id, image, title, price, inCartAmount }) => (
        <Grid item xs={6} key={id}>
          <CatalogCard
            image={image}
            title={title}
            price={price}
            isInCart={inCartAmount > 0}
            onAddToCart={() => onAddToCart(id)}
            onRemoveFromCart={() => onRemoveFromCart(id)}
          />
        </Grid>
      ))}
    </Grid>
  );
}
