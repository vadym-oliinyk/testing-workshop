import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

import { card } from '../../../../theme';

export default function EmptyCart(): JSX.Element {
  return (
    <Card
      sx={{
        ...card,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        py: 2,
        px: 3,
      }}
    >
      <Typography variant="h6" color="text.secondary" component="span" mr={2}>
        No products in cart
      </Typography>
    </Card>
  );
}
