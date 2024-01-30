'use client';

import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';

import SendIcon from '@mui/icons-material/Send';

export default function ConversationTextfield({ id }) {
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = () => {
    setIsLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/comments`, {
      method: 'POST',
      body: JSON.stringify({
        body: message,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(() => {
      setMessage('');
      setIsLoading(false);
    });
  };
  return (
    <FormControl variant='outlined' fullWidth>
      <OutlinedInput
        multiline
        rows={4}
        placeholder='Send message'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        id='send-message'
        endAdornment={
          <InputAdornment position='end' sx={{ alignItems: 'flex-end', marginTop: '-20px' }}>
            <IconButton disabled={!message || isLoading} onClick={sendMessage} edge='end'>
              <SendIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
}
