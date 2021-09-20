import React from 'react';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { card } from '../../../../theme';
import { ProductCardProps } from './types';

export default function ProductCard({
  image,
  title,
  price,
  isInCart,
  onAddToCart,
  onRemoveFromCart,
}: ProductCardProps): JSX.Element {
  return (
    <Box sx={{ mt: 4 }}>
      <Card
        sx={{
          ...card,
        }}
      >
        <CardMedia component="img" height="200" image={image} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </CardContent>
        <CardActions
          sx={{ display: 'flex', justifyContent: 'space-between', px: 2 }}
        >
          <Typography
            variant="subtitle1"
            color="primary"
            component="div"
            sx={{ fontWeight: 700 }}
          >
            {price} $
          </Typography>

          {!isInCart ? (
            <Button size="small" variant="contained" onClick={onAddToCart}>
              Add to cart
            </Button>
          ) : (
            <Button size="small" variant="outlined" onClick={onRemoveFromCart}>
              Remove from cart
            </Button>
          )}
        </CardActions>
      </Card>
    </Box>
  );
}
