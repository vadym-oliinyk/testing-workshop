import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import {
  ShoppingCart as ShoppingCartIcon,
  KeyboardBackspace as KeyboardBackspaceIcon,
} from '@material-ui/icons';

import { HeaderProps } from './types';

export default function Header({ inCartAmount }: HeaderProps): JSX.Element {
  const { pathname } = useLocation();

  return (
    <Box sx={{ display: 'flex', py: 2 }}>
      {pathname === '/cart' && (
        <IconButton LinkComponent={Link} component={Link} to="/">
          <KeyboardBackspaceIcon />
        </IconButton>
      )}
      {pathname === '/' && (
        <IconButton
          LinkComponent={Link}
          component={Link}
          to="/cart"
          sx={{ ml: 'auto' }}
        >
          <Badge badgeContent={inCartAmount} color="primary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      )}
    </Box>
  );
}
