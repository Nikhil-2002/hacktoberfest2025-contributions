import { AddToCart } from "./AddToCart";

export const Header = () => {
  return (
    <header className="site-header">
      <div className="container">
        <a href="/" className="logo">
          ShopMate
        </a>

        <nav className="navbar">
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>

        <AddToCart />
      </div>
    </header>
  );
};
