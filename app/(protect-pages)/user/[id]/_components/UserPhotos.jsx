import Grid from '@mui/material/Grid';
import Album from './../../../../_components/Album/Album';

async function getAlbums(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums`, { next: { revalidate: 0 } });

  return res.json();
}

export default async function UserPhotos({ contact }) {
  const { id } = contact;
  const albums = await getAlbums(id);

  return (
    <Grid container spacing={3}>
      {albums.map((album) => (
        <Grid item xs={12} sm={6} lg={4}>
          <Album key={album.id} album={album} user={id} />
        </Grid>
      ))}
    </Grid>
  );
}
