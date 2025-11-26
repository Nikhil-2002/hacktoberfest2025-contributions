import { Header } from "../components/Header";

const Shop = () => {
  return (
    <>
    <Header/>
    <div className="shop-page">
      <div className="shop-hero">
        <h1 className="shop-hero-title">Welcome to ShopMate</h1>
        <p className="shop-hero-subtitle">
          Discover amazing products and deals today!
        </p>
      </div>

      <div className="products-container">
        {[1, 2, 3, 4, 5, 6].map((product) => (
          <div className="product-card" key={product}>
            <img
              src={`https://picsum.photos/300/200?random=${product}`}
              alt={`Product ${product}`}
            />
            <h3>Product {product}</h3>
            <p>${(product * 10 + 9).toFixed(2)}</p>
            <button className="buy-btn">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Shop;
