'use client';
import { useState } from 'react';

import Link from 'next/link';

import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import Logo from './Logo';

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar sx={{ height: 60, backgroundColor: 'primary.dark' }}>
      <Grid container height='100%'>
        <Grid item xs={2}>
          <Box alignItems='center' display='flex' height='100%' pl={2}>
            <Link href='/dashboard'>
              <Logo color='white' />
            </Link>
          </Box>
        </Grid>
        <Grid item xs={10}>
          <Box alignItems='center' display='flex' justifyContent='flex-end' height='100%' pr={3}>
            <Button onClick={handleClick}>
              <Avatar />
            </Button>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
              <MenuItem onClick={handleClose}>
                <Link href='/user/1'>Profile</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link href='/logged-out'>Logout</Link>
              </MenuItem>
            </Menu>
          </Box>
        </Grid>
      </Grid>
    </AppBar>
  );
}
