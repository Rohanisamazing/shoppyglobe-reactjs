import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-black text-white p-4 shadow-lg shadow-indigo-500/50 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center flex-wrap">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold tracking-wide">
          <Link to="/" className="hover:text-indigo-400 transition duration-300">ShoppyGlobe</Link>
        </h1>

        {/* Navigation */}
        <nav className="flex items-center space-x-6">
          <Link to="/" className="text-lg hover:text-indigo-400 transition duration-300">
            Home
          </Link>
          <Link 
            to="/cart" 
            className="bg-indigo-600 text-white px-6 py-2 rounded-full font-medium shadow-md hover:bg-green-500 transition duration-300"
          >
            Cart
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
