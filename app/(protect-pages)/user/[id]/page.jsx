import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TabPanel from '@mui/lab/TabPanel';

import UserTabs from './_components/UserTabs';
import CompanyInfo from './_components/CompanyInfo';
import UserPosts from './_components/UserPosts';
import UserPhotos from './_components/UserPhotos';

async function getContact(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { next: { revalidate: 0 } });

  return res.json();
}

export default async function User({ params }) {
  const { id } = params;

  const contact = await getContact(id);

  return (
    <Grid container>
      <Grid item xs={12} sm={2} display='flex' justifyContent='center' mb={3}>
        <Avatar alt={contact.name} src={contact.avatar} sx={{ width: 180, height: 180, border: '3px solid white' }} />
      </Grid>
      <Grid item xs={12} sm={10} mb={3}>
        <Card>
          <CardContent>
            <Typography gutterBottom variant='h6' component='h2' fontWeight={600}>
              {contact.name}
            </Typography>
            <Typography gutterBottom variant='body2' component='p'>
              <b>City: </b>
              {contact.address?.city}
            </Typography>
            <Typography gutterBottom variant='body2' component='p'>
              <b>E-mail: </b>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </Typography>
            <Typography gutterBottom variant='body2' component='p'>
              <b>Phone: </b>
              <a href={`tel:${contact.phone}`}>{contact.phone}</a>
            </Typography>
            <Typography gutterBottom variant='body2' component='p'>
              <b>Website: </b>
              <a href={`https://${contact.website}`} target='_blank'>
                {contact.website}
              </a>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <UserTabs contact={contact}>
          <TabPanel value='1'>
            <UserPosts contact={contact} />
          </TabPanel>
          <TabPanel value='2'>
            <UserPhotos contact={contact} />
          </TabPanel>
          <TabPanel value='3'>
            <CompanyInfo contact={contact} />
          </TabPanel>
        </UserTabs>
      </Grid>
    </Grid>
  );
}
