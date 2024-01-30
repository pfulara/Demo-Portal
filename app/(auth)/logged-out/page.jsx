import Link from 'next/link';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Logo from './../../_components/Logo';

export default function LoggedOut() {
  return (
    <Card>
      <CardContent>
        <Box minWidth='320px' py={5} display='flex' flexDirection='column' alignItems='center'>
          <Logo />
          <Typography variant='h4' component='h2' mt={5} mb={3}>
            Logged out
          </Typography>
          <Link href='/login'>
            <Button variant='outlined'>Back to login page</Button>
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
}
