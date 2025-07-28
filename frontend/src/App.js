import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BookDetail from './pages/BookDetail';
import Admin from './pages/Admin';
import FloatingAudioPlayer from './components/FloatingAudioPlayer';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/BookDetail" element={<BookDetail />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <FloatingAudioPlayer />
    </Router>
  );
}

export default App;
