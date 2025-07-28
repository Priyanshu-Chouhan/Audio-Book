import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios.get('http://localhost:5000/api/books');
      setBooks(res.data.slice(0, 3)); // show only top 3 on homepage
    };
    fetchBooks();
  }, []);

  return (
    <div className="home-container">
      <h1>🎧 Featured Audiobooks</h1>
      <div className="book-grid">
        {books.map(book => (
          <div key={book._id} className="book-card">
            <img src={book.coverUrl} alt={book.title} className="book-cover" />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <Link to="/BookDetail" state={{ id: book._id }}>
              <button className="view-button">▶ View Details</button>
            </Link>
          </div>
        ))}
      </div>

      {/* 👇 View All Books Button */}
      <div className="view-all-wrapper">
        <Link to="/BookDetail">
          <button className="view-all-button">📚 View All Books</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
