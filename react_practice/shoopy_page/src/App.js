
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import Home from './Home';
import Category from './Category';
import Product from './Product';
import Cart from './Cart';

export default function App() {
  return (
    <div className="app-shell">
      <header className="navbar">
        <div className="brand">Welcome to Shoppy Page</div>
        <nav className="nav-links">
          <NavLink to="/" end className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''}>About Us</NavLink>
          <NavLink to="/category/electronics" className={({isActive}) => isActive ? 'active' : ''}>Electronics</NavLink>
          <NavLink to="/category/clothing" className={({isActive}) => isActive ? 'active' : ''}>Clothing</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? 'active' : ''}>Contact</NavLink>
        </nav>
      </header>

      <main className="page-area">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryName" element={<Category />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<div className="generic-page"><h2>About Us</h2><p>Simple demo page.</p></div>} />
          <Route path="/contact" element={<div className="generic-page"><h2>Contact</h2><p>contact@shoppy.example</p></div>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}
