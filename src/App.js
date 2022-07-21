import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';
import Register from './views/Register';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className='nav-container'>
        <Navbar />
      </div>

      <div className='content-container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
