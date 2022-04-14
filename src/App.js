import { Link, Route, Routes } from 'react-router-dom';
import Promo from './pages/promo';
import Makanan from './pages/makanan';
import Minuman from './pages/minuman';
import About from './pages/about';
import './App.css';
import Home from './pages/home';
import { getDefaultNormalizer } from '@testing-library/react';

function App() {
  return (
    <div class="body">
      <div className='navbar'>
          <a class="navbar-brand" href="/">KopiKita</a>
          <Link
        class="navbar" to="/promo">Promo</Link>
          <Link
        class="navbar" to="/makanan">Makanan</Link>
          <Link
        class="navbar" to="/minuman">Minuman</Link>
          <Link
        class="navbar" to="/about">About</Link>
            <Link
        class="navbar" to="/promo"></Link>
      </div>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/promo" element={<Promo />}></Route>
            <Route path="/makanan" element={<Makanan />}></Route>
            <Route path="/minuman" element={<Minuman />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </div>
  )
}

export default App;
