import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ p: 2, backgroundColor: '#3f51b5', color: 'white', textAlign: 'center', mt: 'auto' }}>
      <Typography variant="body2">© 2024 FOODIEDELIGHT. All rights reserved.</Typography>
    </Box>
  );
};

export default Footer;
