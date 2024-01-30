import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Link from 'next/link';

async function getPhotos(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos?id=${id * 50 - 49}`, {
    next: { revalidate: 0 },
  });

  return res.json();
}

export default async function Album({ album, user }) {
  const { id } = album;
  const photos = await getPhotos(id);

  const thumb = photos.find((item) => item.albumId === id).thumbnailUrl;

  return (
    <Link href={`/user/${user}/album/${id}`}>
      <Card mb={3}>
        <CardMedia component='img' height='240' image={thumb} alt={album.title} />
        <CardContent>{album.title}</CardContent>
      </Card>
    </Link>
  );
}
