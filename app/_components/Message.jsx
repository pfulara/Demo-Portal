import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';

export default function Message({ user, body }) {
  return (
    <Box display='flex'>
      <Tooltip title={user.name}>
        <Avatar />
      </Tooltip>
      <Box border='1px solid lightgray' borderRadius={5} p={3} mb={3} ml={3}>
        <Typography>{body}</Typography>
      </Box>
    </Box>
  );
}
