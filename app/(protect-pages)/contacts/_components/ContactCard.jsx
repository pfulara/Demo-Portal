import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Link from 'next/link';

export default function ContactCard({ contact }) {
  return (
    <Box display={{ xs: 'flex', sm: 'block' }} justifyContent='center'>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
          <Avatar alt={contact.name} src={contact.avatar} sx={{ width: 120, height: 120 }} />
        </CardContent>
        <CardContent>
          <Typography gutterBottom variant='h6' component='h3' textAlign='center'>
            {contact.name}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            <b>Website:</b>{' '}
            <a href={`https://${contact?.website}`} target='_blank'>
              {contact?.website}
            </a>
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            <b>Company:</b> {contact?.company.name}
          </Typography>
        </CardContent>
        <CardContent>
          <Link href={`/user/${contact.id}`}>
            <Button fullWidth size='small'>
              View profile
            </Button>
          </Link>
          <Link href={`/messages/${contact.id}`}>
            <Button fullWidth size='small'>
              Send message
            </Button>
          </Link>
        </CardContent>
      </Card>
    </Box>
  );
}
