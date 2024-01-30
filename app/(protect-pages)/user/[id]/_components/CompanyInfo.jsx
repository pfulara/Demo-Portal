import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import CompanyMap from './CompanyMap';

export default function CompanyInfo({ contact }) {
  return (
    <Grid container>
      <Grid item xs={12} sm={4}>
        <Typography gutterBottom variant='h6' component='p' fontWeight={600}>
          {contact.company?.name}
        </Typography>
        <Typography gutterBottom variant='body2' component='p'>
          <b>Street: </b>
          {contact.address?.street} {contact.address?.suite}
        </Typography>
        <Typography gutterBottom variant='body2' component='p'>
          <b>City: </b>
          {contact.address?.zipcode} {contact.address?.city}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={8}>
        <CompanyMap contact={contact} />
      </Grid>
    </Grid>
  );
}
