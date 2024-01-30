import Typography from '@mui/material/Typography';

import Photos from './_components/Photos';
import Link from 'next/link';

async function getAlbum(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
    next: { revalidate: 0 },
  });

  return res.json();
}

export default async function Album({ params }) {
  const { id, albumId } = params;

  const album = await getAlbum(albumId);

  return (
    <div>
      <Link href={`/user/${id}`}>{'< Back'}</Link>
      <Typography gutterBottom variant='h4' component='h2'>
        {album.title}
      </Typography>
      <Photos albumId={albumId} />
    </div>
  );
}
