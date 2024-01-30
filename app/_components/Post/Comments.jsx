'use client';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import CardActions from '@mui/material/CardActions';

import SendIcon from '@mui/icons-material/Send';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

export default function Comments({ children, commentsCount }) {
  const [showComments, setShowComments] = useState(false);
  const [commendBody, setCommentBody] = useState('');

  return (
    <>
      <CardActions disableSpacing sx={{ justifyContent: 'space-between' }}>
        <Box>
          <IconButton aria-label='add to favorites'>
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label='share'>
            <ShareIcon />
          </IconButton>
        </Box>
        <Typography
          variant='p'
          component='p'
          fontSize={10}
          textAlign='right'
          sx={{ cursor: 'pointer', paddingRight: 2 }}
          onClick={() => setShowComments(true)}
        >
          Comments {commentsCount && `(${commentsCount})`}
        </Typography>
      </CardActions>
      {showComments && (
        <Box p={2}>
          <Box display='flex' mb={3}>
            <Avatar alt='Logged user' sx={{ width: 56, height: 56, marginRight: 1 }} />
            <FormControl variant='outlined' fullWidth>
              <InputLabel htmlFor='add-comment'>Add comment</InputLabel>
              <OutlinedInput
                value={commendBody}
                onChange={(e) => setCommentBody(e.target.value)}
                id='add-comment'
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton edge='end'>
                      <SendIcon />
                    </IconButton>
                  </InputAdornment>
                }
                label='Add comment'
              />
            </FormControl>
          </Box>
          {children}
        </Box>
      )}
    </>
  );
}
