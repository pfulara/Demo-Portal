'use client';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';

import ConversationItem from '../../_components/ConversationItem';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function ListWrapper({ conversations }) {
  const params = useParams();
  const { conversationId } = params;

  return (
    <Box height='100%' display={!conversationId ? 'block' : { xs: 'none', sm: 'block' }}>
      <Card sx={{ height: '100%' }}>
        <CardContent sx={{ height: '100%', maxHeight: 'calc(100vh - 100px)' }}>
          <List sx={{ overflowY: 'scroll', height: '100%', overflowX: 'hidden' }}>
            {conversations.map((conversation) => (
              <ListItem key={conversation.id} sx={{ marginBottom: 1 }} disablePadding>
                <ListItemButton>
                  <Link href={`/messages/${conversation.id}`}>
                    <ConversationItem item={conversation} />
                  </Link>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
}
