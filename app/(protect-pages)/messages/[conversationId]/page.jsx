import { Suspense } from 'react';

import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';

import Message from '../../../_components/Message';
import Loader from '../../../_components/Loader';
import ConversationTextfield from '../../../_components/ConversationTextfield';

async function getConversation(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);

  return res.json();
}

async function getUser(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  return res.json();
}

export default async function SingleConversation({ params }) {
  const { conversationId } = params;

  const messages = await getConversation(conversationId);
  const user = await getUser(conversationId);

  return (
    <Box height={{ xs: '96%', sm: '100%' }} display={conversationId ? 'block' : { xs: 'none', sm: 'block' }}>
      <Card sx={{ height: '100%' }}>
        <CardContent sx={{ height: '100%' }}>
          <Suspense fallback={<Loader />}>
            <Box
              display='flex'
              justifyContent='space-between'
              flexDirection='column'
              height='100%'
              maxHeight='calc(100vh - 150px)'
            >
              <Box pr={3} height='calc(100% - 125px)' sx={{ overflowY: 'scroll' }}>
                {messages.map((message) => (
                  <Message key={message.id} user={user} body={message.body} />
                ))}
              </Box>
              <ConversationTextfield id={conversationId} />
            </Box>
          </Suspense>
        </CardContent>
      </Card>
    </Box>
  );
}
