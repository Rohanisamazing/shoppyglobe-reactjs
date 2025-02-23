import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { Link } from "react-router-dom";
import { useState } from "react";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setMessage("Product added to cart! Successfully ✅");
    
    // Hide message after 2 seconds
    setTimeout(() => setMessage(""), 2000);
  };

  return (
    <div className="border p-4 rounded shadow-md bg-white">
      <img src={product.thumbnail} alt={product.name} className="w-40 h-40 object-cover mx-auto mb-2 rounded-md transition-transform transform hover:scale-110 " />
      <h3 className="text-lg font-bold">{product.title}</h3>
      <p className="text-gray-600">${product.price}</p>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        className="bg-indigo-600 font-medium text-white px-3 py-1 mt-4 rounded hover:bg-green-500 transform scale-95 hover:scale-100 transition duration-300 ease-in-out"
      >
        Add to Cart 🛒
      </button>

      <Link to={`/product/${product.id}`} className="text-blue-500 font-medium ml-8 hover:text-black underline ml-3">View Details</Link>

      {/* Success Message */}
      {message && <p className="text-green-600 text-sm mt-2">{message}</p>}
    </div>
  );
};

export default ProductItem;
