import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import Comments from './Comments';
import Link from 'next/link';

async function getComments(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`, { next: { revalidate: 0 } });

  return res.json();
}

export default async function Post({ user, post }) {
  const comments = await getComments(post.id);

  return (
    <Card sx={{ marginBottom: 3 }}>
      <CardHeader
        avatar={<Avatar alt={user.name} src={user.avatar} />}
        title={<Link href={`/user/${user.id}`}>{user.name}</Link>}
        subheader={user.company?.name}
      />
      {post.image && <CardMedia component='img' height='240' image={post.image} alt={post.title} />}
      <CardContent>
        <Box pb={1} mb={1} sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Typography variant='p' fontSize={14}>
            {post.body}
          </Typography>
        </Box>
      </CardContent>

      <Comments commentsCount={comments.length}>
        {comments.map((comment) => (
          <Box key={comment.id} display='flex' mb={1}>
            <Avatar alt={comment.email} src={comment.avatar} sx={{ width: 30, height: 30 }} />
            <Box p={1} ml={1} bgcolor='#EBEDEF' width='100%'>
              <Typography variant='p' component='p' fontSize={12} fontWeight={600}>
                {comment.email}
              </Typography>
              <Typography variant='p' fontSize={12}>
                {comment.body}
              </Typography>
            </Box>
          </Box>
        ))}
      </Comments>
    </Card>
  );
}
