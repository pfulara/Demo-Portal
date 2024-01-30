import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

export default function Loader() {
  return (
    <Box display='flex' justifyContent='center' mt={5}>
      <CircularProgress />
    </Box>
  );
}
