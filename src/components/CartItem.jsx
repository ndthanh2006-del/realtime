import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
} from "../redux/CartSlice";

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="content-page cart-page">
      <div className="page-heading">
        <p className="eyebrow">YOUR SELECTION</p>
        <h1>Shopping Cart</h1>
      </div>

      {items.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is waiting for some greenery.</h2>
          <Link className="primary-button" to="/plants">Continue Shopping</Link>
        </div>
      ) : (
        <>
          <div className="cart-list">
            {items.map((item) => (
              <article className="cart-row" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="cart-product">
                  <h3>{item.name}</h3>
                  <p>Unit price: ${item.price.toFixed(2)}</p>
                  <p className="line-total">Item total: ${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <div className="quantity-controls">
                  <button aria-label={`Decrease ${item.name}`} onClick={() => dispatch(decreaseQuantity(item.id))}>−</button>
                  <span>{item.quantity}</span>
                  <button aria-label={`Increase ${item.name}`} onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                </div>
                <button className="remove-button" onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>
              </article>
            ))}
          </div>
          <div className="cart-summary">
            <h2>Total: ${total.toFixed(2)}</h2>
            <div className="cart-actions">
              <Link className="secondary-button" to="/plants">Continue Shopping</Link>
              <button className="primary-button" onClick={() => window.alert("Coming Soon!")}>Checkout</button>
            </div>
          </div>
        </>
      )}
    </main>
  );
}