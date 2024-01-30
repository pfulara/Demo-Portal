'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function UserTabs({ children }) {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card sx={{ marginBottom: 3 }}>
      <CardContent sx={{ width: '100%' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange}>
              <Tab label='Posts' value='1' />
              <Tab label='Photos' value='2' />
              <Tab label='Company' value='3' />
            </TabList>
          </Box>
          {children}
        </TabContext>
      </CardContent>
    </Card>
  );
}
