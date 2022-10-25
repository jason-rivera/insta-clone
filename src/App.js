import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Register from './pages/Register/Register';
import Test from './pages/Test/Test';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <nav className='nav-container'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/register'>Register</Link>
          </li>
          <li>
            <Link to='/test'>Test</Link>
          </li>
        </ul>
      </nav>
      <div className='content-container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/register' element={<Register />} />
          <Route path='/test' element={<Test />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
