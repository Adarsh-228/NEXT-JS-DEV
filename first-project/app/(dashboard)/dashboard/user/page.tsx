import { NextPage } from 'next';

async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
}

const UserPage = async () => {
  const posts = await getData();

  return (
    <div
      style={{
        backgroundColor: '#2D2D2D',
        color: '#E0E0E0',
        minHeight: '100vh',
        padding: '4rem 2rem',
        fontFamily: 'sans-serif',
      }}
    >
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Posts from JSONPlaceholder</h1>
      <main>
        {posts.map((post: any) => (
          <div key={post.id} style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #555', borderRadius: '8px' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </main>
    </div>
  );
};

export default UserPage;
