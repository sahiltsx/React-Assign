
import { useEffect, useState } from 'react';
import './App.css';

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function fetchUsers() {
      try {
        setLoading(true);
        setError('');

        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        );

        if (!response.ok) {
          throw new Error('Failed to fetch user data.');
        }

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message || 'Something went wrong.');
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) =>
    `${user.name} ${user.email} ${user.username}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <main className="app">
      <header className="header">
        <p className="eyebrow">REACT API PROJECT</p>
        <h1>User Directory</h1>
        <p>Fetch and explore user information from a REST API.</p>
      </header>

      <input
        className="search"
        type="search"
        placeholder="Search by name, username or email..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && <p className="status">Loading users...</p>}

      {!loading && error && (
        <div className="error">
          <p>{error}</p>
          <button onClick={() => window.location.reload()}>
            Try Again
          </button>
        </div>
      )}

      {!loading && !error && (
        <>
          <p className="count">
            Showing {filteredUsers.length} of {users.length} users
          </p>

          <section className="user-grid">
            {filteredUsers.map((user) => (
              <article className="user-card" key={user.id}>
                <div className="avatar">
                  {user.name.charAt(0)}
                </div>

                <h2>{user.name}</h2>
                <p className="username">@{user.username}</p>

                <div className="details">
                  <p><strong>Email:</strong> {user.email}</p>
                  <p><strong>City:</strong> {user.address.city}</p>
                  <p><strong>Company:</strong> {user.company.name}</p>
                  <p><strong>Phone:</strong> {user.phone}</p>
                </div>
              </article>
            ))}
          </section>

          {filteredUsers.length === 0 && (
            <p className="status">No matching users found.</p>
          )}
        </>
      )}
    </main>
  );
}