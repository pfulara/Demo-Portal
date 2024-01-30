'use client';
import { useState } from 'react';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

export default function SinglePhoto({ photo }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card sx={{ cursor: 'pointer' }}>
      <CardMedia component='img' src={photo.thumbnailUrl} height={240} onClick={handleOpen} />
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <img src={photo.url} />
        </Box>
      </Modal>
    </Card>
  );
}
