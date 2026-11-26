import { Link, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

function Home() {
  return (
    <main className="hero">
      <div className="hero-content">
        <p className="eyebrow">BRING NATURE HOME</p>
        <h1>Paradise Nursery</h1>
        <p className="hero-copy">
          Find your perfect plant and make your space a little greener.
          Discover beautiful houseplants selected to bring life into your home.
        </p>
        <Link className="primary-button" to="/plants">Get Started</Link>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}