'use client';
import { useState } from 'react';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

import SendIcon from '@mui/icons-material/Send';

export default function AddPost() {
  const [postBody, setPostBody] = useState('');

  const sendPost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        body: postBody,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(() => {
      setPostBody('');
    });
  };

  return (
    <Card sx={{ marginBottom: 3 }}>
      <CardContent>
        <Box display='flex'>
          <Avatar alt='Logged user' sx={{ width: 56, height: 56, marginRight: 1 }} />
          <FormControl variant='outlined' fullWidth>
            <InputLabel htmlFor='add-post'>Add post</InputLabel>
            <OutlinedInput
              value={postBody}
              onChange={(e) => setPostBody(e.target.value)}
              id='add-post'
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton onClick={sendPost} edge='end'>
                    <SendIcon />
                  </IconButton>
                </InputAdornment>
              }
              label='Add post'
            />
          </FormControl>
        </Box>
      </CardContent>
    </Card>
  );
}
