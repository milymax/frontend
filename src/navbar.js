import { Link, Route, Routes } from 'react-router-dom';
import Promo from './pages/promo';
import Makanan from './pages/makanan';
import Minuman from './pages/minuman';
import './App.css';
import Home from './pages/home';
// import { getDefaultNormalizer } from '@testing-library/react';

function Navbar() {
  return (
    <div class="body">
      <div className="navbar navbar-expand-lg navbar-light bg-light">

        <a class="navbar-brand" href="/">KopiKita</a>
        <Link
          className="navbar-link mx-2" to="/promo">Promo</Link>
        <Link
          className="navbar-link mx-2" to="/makanan">Makanan</Link>
        <Link
          cclassName="navbar-link mx-2" to="/minuman">Minuman</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/promo" element={<Promo />}></Route>
        <Route path="/makanan" element={<Makanan />}></Route>
        <Route path="/minuman" element={<Minuman />}></Route>
      </Routes>
    </div>
  )
}

export default Navbar
