
import { Link } from "react-router-dom"; // Correct import
export const Header = () => {
  return (
    <header className="site-header">
      <div className="container">
        <Link to="/" className="logo">
          ShopMate
        </Link>

        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link> 
            </li>
             <li>
              <Link to="/">About</Link> 
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
};
