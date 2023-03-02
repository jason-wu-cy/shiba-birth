import React, { memo } from 'react';
import Box from '@mui/material/Box';

function Dot(props) {
  /* Global & Local State */
  const { color } = props;
  /* Main */
  return (
    <Box component="span" sx={{ color }}>
      *
    </Box>
  );
}

export default memo(Dot);
