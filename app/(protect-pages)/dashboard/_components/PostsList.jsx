import Post from '../../../_components/Post/Post';

async function getPosts() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, { next: { revalidate: 0 } });

  return res.json();
}

async function getUsers() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`, { next: { revalidate: 0 } });

  return res.json();
}

export default async function PostsList() {
  const posts = await getPosts();
  const users = await getUsers();

  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} user={users.find((user) => user.id === post.userId)} />
      ))}
    </div>
  );
}
