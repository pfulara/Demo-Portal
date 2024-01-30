import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function ConversationItem({ item }) {
  return (
    <Box display='flex'>
      <Avatar sx={{ marginRight: 1, width: '32px', height: '32px' }} />
      <Typography noWrap sx={{ fontSize: '12px' }}>
        {item.name}
      </Typography>
    </Box>
  );
}
