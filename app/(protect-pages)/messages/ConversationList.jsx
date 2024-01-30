import { Suspense } from 'react';

import ListWrapper from './ListWrapper';
import Loader from '../../_components/Loader';

async function getConversations() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');

  return res.json();
}

export default async function ConversationList() {
  const conversations = await getConversations();

  return (
    <Suspense fallback={<Loader />}>
      <ListWrapper conversations={conversations} />
    </Suspense>
  );
}
