import { useEffect, useState } from 'react';
import axios from 'axios';
import './Admin.css';

function Admin() {
  const [books, setBooks] = useState([]);
  const [form, setForm] = useState({
    title: '',
    author: '',
    genre: '',
    description: '',
    coverUrl: '',
    audioUrl: ''
  });
  const [editId, setEditId] = useState(null);

  const fetchBooks = async () => {
    const res = await axios.get('http://localhost:5000/api/books');
    setBooks(res.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (editId) {
      await axios.put(`http://localhost:5000/api/books/${editId}`, form);
    } else {
      await axios.post('http://localhost:5000/api/books', form);
    }
    setForm({
      title: '',
      author: '',
      genre: '',
      description: '',
      coverUrl: '',
      audioUrl: ''
    });
    setEditId(null);
    fetchBooks();
  };

  const handleEdit = book => {
    setForm(book);
    setEditId(book._id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async id => {
    await axios.delete(`http://localhost:5000/api/books/${id}`);
    fetchBooks();
  };

  return (
    <div className="admin-container">
      <h2>{editId ? '✏️ Edit Audiobook' : '➕ Add Audiobook'}</h2>

      <form onSubmit={handleSubmit} className="admin-form">
  <label>
    Title:
    <input name="title" placeholder="Enter book title" value={form.title} onChange={handleChange} required />
  </label>
  
  <label>
    Author:
    <input name="author" placeholder="Enter author name" value={form.author} onChange={handleChange} required />
  </label>
  
  <label>
    Genre:
    <input name="genre" placeholder="Enter genre (e.g., Fiction, Mystery)" value={form.genre} onChange={handleChange} required />
  </label>
  
  <label>
    Description:
    <textarea name="description" placeholder="Short book description" value={form.description} onChange={handleChange} />
  </label>
  
  <label>
    Cover Image URL:
    <input name="coverUrl" placeholder="Enter cover image link" value={form.coverUrl} onChange={handleChange} required />
  </label>
  
  <label>
    Audio File URL:
    <input name="audioUrl" placeholder="Enter audio file link (mp3)" value={form.audioUrl} onChange={handleChange} required />
  </label>
  
  <button type="submit">{editId ? 'Update' : 'Add'} Book</button>
</form>


      <h3>📚 All Audiobooks</h3>
      <div className="book-list">
        {books.map(book => (
          <div key={book._id} className="book-item">
            <img src={book.coverUrl} alt={book.title} />
            <div className="book-info">
              <h4>{book.title}</h4>
              <p>{book.author}</p>
              <div className="actions">
                <button onClick={() => handleEdit(book)}>✏️ Edit</button>
                <button onClick={() => handleDelete(book._id)}>🗑️ Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;
