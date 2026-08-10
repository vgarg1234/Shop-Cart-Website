import React, { useState, useEffect } from 'react';
import {
  Box, Modal, IconButton, TextField, Button, Typography
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function NewsletterModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Box sx={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        bgcolor: 'white', borderRadius: 2, overflow: 'hidden',
        display: 'flex', maxWidth: 750, width: '90%', outline: 'none',
      }}>
        <Box sx={{ display: { xs: 'none', md: 'block' }, width: 350, flexShrink: 0 }}>
          <img src="/images/newsletter.png" alt="newsletter" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Box>
        <Box sx={{ p: 5, textAlign: 'center', flex: 1 }}>
          <IconButton onClick={() => setOpen(false)} sx={{
            position: 'absolute', top: 10, right: 10,
            bgcolor: '#ff7171', color: 'white', '&:hover': { bgcolor: '#ff5555' }
          }}>
            <CloseIcon />
          </IconButton>
          <Typography variant="h5" fontWeight={600} mb={1}>Subscribe Newsletter.</Typography>
          <Typography variant="body2" color="text.secondary" mb={3}>
            Subscribe the <b>Shop Cart</b> to get latest products and discount update.
          </Typography>
          <TextField fullWidth size="small" placeholder="Email Address" type="email" sx={{ mb: 2 }} />
          <Button variant="contained" fullWidth sx={{
            bgcolor: '#222', '&:hover': { bgcolor: '#ff7171' }, py: 1.2, fontWeight: 600
          }}>
            Subscribe
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
