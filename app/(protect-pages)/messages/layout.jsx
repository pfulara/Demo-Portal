import Grid from '@mui/material/Grid';

import ConversationList from './ConversationList';

export const metadata = {
  title: 'Messages',
};

export default function ConversationLayout({ children }) {
  return (
    <Grid container spacing={{ xs: 0, sm: 3 }} height='100%'>
      <Grid item xs={12} sm={4} lg={3}>
        <ConversationList />
      </Grid>
      <Grid maxHeight={{ xs: '84vh', sm: 'fit-content' }} item xs={12} sm={8} lg={9}>
        {children}
      </Grid>
    </Grid>
  );
}
