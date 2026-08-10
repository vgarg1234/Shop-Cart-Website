import React, { useState, useEffect } from 'react';
import { Box, Paper, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function NotificationToast() {
  const [visible, setVisible] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    if (closed) return;
    const show = setInterval(() => {
      setVisible(true);
      setTimeout(() => setVisible(false), 5000);
    }, 10000);
    setTimeout(() => { setVisible(true); setTimeout(() => setVisible(false), 5000); }, 1000);
    return () => clearInterval(show);
  }, [closed]);

  if (closed) return null;

  return (
    <Paper elevation={4} sx={{
      position: 'fixed', bottom: { xs: 80, md: 30 }, left: 20,
      display: 'flex', alignItems: 'flex-start', gap: 2, p: 2,
      borderRadius: 2, maxWidth: 300, zIndex: 1300,
      transform: visible ? 'translateX(0)' : 'translateX(calc(-100% - 40px))',
      opacity: visible ? 1 : 0,
      transition: 'transform 0.5s ease, opacity 0.5s ease',
    }}>
      <Box sx={{ width: 70, height: 70, border: '1px solid #eee', borderRadius: 1, flexShrink: 0 }}>
        <img src="/images/products/jewellery-1.jpg" alt="product" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </Box>
      <Box sx={{ flex: 1, pr: 2 }}>
        <Typography variant="caption" color="text.secondary">Someone in new just bought</Typography>
        <Typography variant="body2" fontWeight={500}>Rose Gold Earrings</Typography>
        <Typography variant="caption" color="text.secondary">2 Minutes ago</Typography>
      </Box>
      <IconButton size="small" onClick={() => setClosed(true)} sx={{ position: 'absolute', top: 8, right: 8 }}>
        <CloseIcon fontSize="small" />
      </IconButton>
    </Paper>
  );
}
