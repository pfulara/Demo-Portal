import Typography from '@mui/material/Typography';

import ContactsIcon from '@mui/icons-material/Contacts';

export default function Logo({ color = 'primary' }) {
  return (
    <Typography
      color={color}
      variant='body2'
      component='h1'
      display='flex'
      alignItems='center'
      border='1px solid'
      borderColor={color}
      borderRadius={3}
      p={1}
    >
      <ContactsIcon sx={{ marginRight: 2 }} /> Connect People
    </Typography>
  );
}
