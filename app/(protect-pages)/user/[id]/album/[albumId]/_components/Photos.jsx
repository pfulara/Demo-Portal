import Grid from '@mui/material/Grid';

import SinglePhoto from './SinglePhoto';

async function getPhotos(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`, {
    next: { revalidate: 0 },
  });

  return res.json();
}

export default async function Photos({ albumId }) {
  const photos = await getPhotos(albumId);

  return (
    <Grid container spacing={3}>
      {photos.map((photo) => (
        <Grid key={photo.id} item xs={12} sm={6} lg={4}>
          <SinglePhoto photo={photo} />
        </Grid>
      ))}
    </Grid>
  );
}
