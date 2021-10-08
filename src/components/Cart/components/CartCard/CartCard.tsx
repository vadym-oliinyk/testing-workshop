import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Add as AddIcon, Remove as RemoveIcon } from '@material-ui/icons';

import { card } from '../../../../theme';
import { CartCardProps } from './types';

export default function CartCard({
  image,
  title,
  price,
  inCartAmount,
  onLess,
  onMore,
}: CartCardProps): JSX.Element {
  return (
    <Card
      sx={{
        ...card,
        display: 'flex',
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: 145, height: 135 }}
        image={image}
        data-testid="cart-card-image"
      />

      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto', pb: 0 }}>
          <Typography
            variant="h5"
            component="div"
            data-testid="cart-card-title"
          >
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="primary"
            component="div"
            sx={{ fontWeight: 700 }}
            data-testid="cart-card-price"
          >
            {price} $
          </Typography>
        </CardContent>

        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton data-testid="cart-card-less" onClick={onLess}>
            <RemoveIcon />
          </IconButton>
          <Typography
            variant="h5"
            color="text.secondary"
            component="div"
            data-testid="cart-card-amount"
          >
            {inCartAmount}
          </Typography>
          <IconButton data-testid="cart-card-more" onClick={onMore}>
            <AddIcon />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
}
