import { AddToCart } from "./AddToCart";

export const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700">
          ShopMate
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
            Home
          </a>
          <a href="/shop" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
            Shop
          </a>
          <a href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
            About
          </a>
          <a href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
            Contact
          </a>
        </nav>

        {/* Add to Cart */}
        <div className="ml-4">
          <AddToCart />
        </div>
      </div>
    </header>
  );
};
