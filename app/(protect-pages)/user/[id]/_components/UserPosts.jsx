import Post from '../../../../_components/Post/Post';

async function getPosts(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`, { next: { revalidate: 0 } });

  return res.json();
}

export default async function UserPosts({ contact }) {
  const { id } = contact;
  const posts = await getPosts(id);

  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} user={contact} post={post} />
      ))}
    </div>
  );
}
