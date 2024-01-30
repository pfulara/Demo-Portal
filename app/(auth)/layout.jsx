import Box from '@mui/material/Box';

export default function AuthLayout({ children }) {
  return (
    <main style={{ height: '100%' }}>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        sx={{ minHeight: '100vh', backgroundColor: 'background.light', color: 'text.primary' }}
      >
        {children}
      </Box>
    </main>
  );
}
