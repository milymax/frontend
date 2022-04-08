import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Promo from './pages/promo';
import Makanan from './pages/makanan';
import Minuman from './pages/minuman';
import About from './pages/about';
import './App.css';

function App() {
  return (
    <div className="flex justify-center p-6 w-wscreen h-screen bg-gray-200 overflow-auto">
      <nav class="navbar sticky-top navbar-light bg-light shadow-sm p-3 mb-5 bg-body rounded">
        <div class="container">
          <a class="navbar-brand" href="/">KopiKita</a>
        
        <div classN="flex items-center justify-center mb-4 text-xstext-gray-600 font-semibold uppercase tracking-wide">
          <Link
              class="fw-bold font-monospace text-decoration-none w-25 p-3 text-dark" to="/">Home</Link>
          <Link
              class="fw-bold font-monospace text-decoration-none w-25 p-3 text-dark" to="/promo">Promo</Link>
          <Link
              class="fw-bold font-monospace text-decoration-none w-25 p-3 text-dark" to="/makanan">Makanan</Link>
          <Link
              class="fw-bold font-monospace text-decoration-none w-25 p-3 text-dark" to="/minuman">Minuman</Link>
          <Link
              class="fw-bold font-monospace text-decoration-none w-25 p-3 text-dark" to="/about">About</Link>
          </div>
        </div>   
      </nav>
      <div class="">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/promo" element={<Promo />}></Route>
            <Route path="/makanan" element={<Makanan />}></Route>
            <Route path="/minuman" element={<Minuman />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </div>
    </div>

  )
}

export default App;