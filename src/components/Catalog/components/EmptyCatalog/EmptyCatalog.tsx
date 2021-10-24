import React from 'react';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function EmptyCatalog(): JSX.Element {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100vh - 75px)',
      }}
    >
      <CircularProgress data-testid="catalog-loader" />
    </Box>
  );
}
