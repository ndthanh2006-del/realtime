import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const cartCount = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <nav className="navbar">
      <Link className="brand" to="/">🌿 Paradise Nursery</Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/about">About Us</Link>
        <Link to="/cart" className="cart-link">🛒 Cart <span className="cart-count">{cartCount}</span></Link>
      </div>
    </nav>
  );
}