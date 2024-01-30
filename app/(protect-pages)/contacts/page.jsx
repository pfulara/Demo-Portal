import ContactsList from './ContactsList';
import Typography from '@mui/material/Typography';

export const metadata = {
  title: 'Contacts',
};

export default function Contacts() {
  return (
    <div>
      <Typography gutterBottom variant='h4' component='h2'>
        Contacts
      </Typography>
      <ContactsList />
    </div>
  );
}
