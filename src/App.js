import { Link, Route, Routes } from 'react-router-dom';
import Promo from './pages/promo';
import Makanan from './pages/makanan';
import Minuman from './pages/minuman';
import About from './pages/about';
import './App.css';
import Home from './pages/home';

function App() {
  return (
    <div class="body">
    <div class="container">
      <nav class="navbar">
        <div class="container">
          <a class="navbar-brand" href="/">KopiKita</a>
        <div class="">
          <Link
              class="fw-bold font-monospace text-decoration-none w-25 p-3 text-light" to="/promo">Promo</Link>
          <Link
              class="fw-bold font-monospace text-decoration-none w-25 p-3 text-light" to="/makanan">Makanan</Link>
          <Link
              class="fw-bold font-monospace text-decoration-none w-25 p-3 text-light" to="/minuman">Minuman</Link>
          <Link
              class="fw-bold font-monospace text-decoration-none w-25 p-3 text-light" to="/about">About</Link>
            <Link
              class="fw-bold font-monospace text-decoration-none w-25 p-3 text-light" to="/promo"></Link>
          </div>
        </div>   
      </nav>
      <div class="container">
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/promo" element={<Promo />}></Route>
            <Route path="/makanan" element={<Makanan />}></Route>
            <Route path="/minuman" element={<Minuman />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </div>
        </div>
    </div>
  )
}

export default App;