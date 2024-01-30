import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';

export default function Messages() {
  return (
    <Box height='100%' display={{ xs: 'none', sm: 'block' }}>
      <Card sx={{ height: '100%' }}>
        <CardContent sx={{ height: '100%' }}>
          <Typography textAlign='center' variant='h4' component='h3' mt={3}>
            Choose a conversation
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
