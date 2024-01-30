import Grid from '@mui/material/Grid';

import Header from './../_components/Header';
import Sidebar from './../_components/Sidebar';

export default function ProtectLayout({ children }) {
  return (
    <>
      <Header />
      <Grid
        pt='60px'
        container
        sx={{ height: '100%', minHeight: '100vh', backgroundColor: 'background.light', color: 'text.primary' }}
      >
        <Grid item xs={12} sm={2}>
          <Sidebar />
        </Grid>
        <Grid pt={{ xs: 0, sm: 2 }} px={2} item xs={12} sm={10}>
          <main style={{ height: '100%' }}>{children}</main>
        </Grid>
      </Grid>
    </>
  );
}
