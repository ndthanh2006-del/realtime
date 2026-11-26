import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import { plantCategories } from "../data/plants";

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const isInCart = (id) => cartItems.some((item) => item.id === id);

  return (
    <main className="content-page">
      <div className="page-heading">
        <p className="eyebrow">GROW SOMETHING GOOD</p>
        <h1>Find Your Perfect Plant</h1>
        <p>Explore our houseplant collection.</p>
      </div>

      {plantCategories.map((category) => (
        <section className="plant-category" key={category.name}>
          <h2>{category.name}</h2>
          <div className="plant-grid">
            {category.plants.map((plant) => (
              <article className="plant-card" key={plant.id}>
                <img src={plant.image} alt={plant.name} />
                <div className="plant-info">
                  <h3>{plant.name}</h3>
                  <p>{plant.description}</p>
                  <div className="plant-card-footer">
                    <strong>${plant.price.toFixed(2)}</strong>
                    <button
                      className="small-button"
                      disabled={isInCart(plant.id)}
                      onClick={() => dispatch(addToCart(plant))}
                    >
                      {isInCart(plant.id) ? "Added" : "Add to Cart"}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}