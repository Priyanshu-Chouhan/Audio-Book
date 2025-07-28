import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAudio } from '../context/AudioPlayerContext';
import './BookDetail.css';

function BookDetail() {
  const location = useLocation();
  const { id } = location.state || {};
  const [books, setBooks] = useState([]);
  const [error, setError] = useState('');
  const { playAudio } = useAudio();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        if (id) {
          const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/books/${id}`);
          setBooks([res.data]);
        } else {
          const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/books`);
          setBooks(res.data);
        }
      } catch (err) {
        console.error('Error loading book(s):', err);
        setError('Book(s) not found.');
      }
    };

    fetchBooks();
  }, [id]);

  if (error) return <div className="container"><h2>{error}</h2></div>;
  if (!books.length) return <div className="container"><h2>Loading book details...</h2></div>;

  return (
    <div className="book-detail-container">
      <h1>{id ? 'Book Detail' : 'All Books'}</h1>
      <div className="detail-grid">
        {books.map((book) => (
          <div key={book._id} className="book-detail-card">
            <img src={book.coverUrl} alt={book.title} className="detail-cover" />
            <div className="detail-info">
              <h2>{book.title}</h2>
              <p><strong>Author:</strong> {book.author}</p>
              <p><strong>Genre:</strong> {book.genre}</p>
              <p>{book.description}</p>
              
              <button
                onClick={() => playAudio(book.audioUrl, book.title)}
                className="view-button"
              >
                ▶ Play Audio
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookDetail;
