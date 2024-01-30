import Grid from '@mui/material/Grid';
import ContactCard from './_components/ContactCard';

async function getContacts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');

  return res.json();
}

export default async function ContactsList() {
  const contacts = await getContacts();

  return (
    <Grid spacing={2} pt={3} mb={3} container>
      {contacts.map((contact) => (
        <Grid key={contact.id} item xs={12} sm={4} lg={3}>
          <ContactCard contact={contact} />
        </Grid>
      ))}
    </Grid>
  );
}
