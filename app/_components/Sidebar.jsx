import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import NewspaperIcon from '@mui/icons-material/Newspaper';
import PeopleIcon from '@mui/icons-material/People';
import MessageIcon from '@mui/icons-material/Message';

import Footer from './Footer';
import Link from 'next/link';

const pages = [
  { href: '/dashboard', label: 'Posts', icon: <NewspaperIcon /> },
  { href: '/messages', label: 'Messages', icon: <MessageIcon /> },
  { href: '/contacts', label: 'Contacts', icon: <PeopleIcon /> },
];

export default function Sidebar() {
  return (
    <Box sx={{ height: '100%' }}>
      <Box sx={{ height: 'calc(100% - 30px)' }}>
        <nav>
          <List
            sx={{
              display: { xs: 'flex', sm: 'block' },
              justifyContent: { xs: 'center', sm: 'flex-start' },
            }}
          >
            {pages.map(({ href, label, icon }) => (
              <Link key={href} href={href}>
                <ListItem disablePadding>
                  <ListItemButton sx={{ paddingLeft: 0, paddingRight: 0 }}>
                    <ListItemIcon sx={{ justifyContent: 'center' }}>{icon}</ListItemIcon>
                    <ListItemText primary={label} />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
        </nav>
      </Box>
      <Footer />
    </Box>
  );
}
