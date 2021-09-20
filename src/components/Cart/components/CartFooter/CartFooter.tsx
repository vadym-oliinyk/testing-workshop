import React from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { card } from '../../../../theme';
import { CartFooterProps } from './types';

export default function CartFooter({
  totalPrice,
}: CartFooterProps): JSX.Element {
  return (
    <Grid item xs={10} mt={3}>
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
        <Box>
          <Typography
            variant="h6"
            color="text.secondary"
            component="span"
            mr={2}
          >
            Total:
          </Typography>
          <Typography variant="h6" color="primary" component="span">
            {totalPrice} $
          </Typography>
        </Box>
      </Card>
    </Grid>
  );
}
