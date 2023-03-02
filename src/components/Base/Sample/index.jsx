import React, { memo } from 'react';
import Box from '@mui/material/Box';

function Sample(props) {
  /* Global & Local State */
  const { text } = props;
  /* Functions */
  /* Hooks */
  return <Box>{text}</Box>;
}

export default memo(Sample);
