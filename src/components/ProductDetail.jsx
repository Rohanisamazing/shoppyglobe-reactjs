import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addToCart } from "../store/cartSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(""); // Using State for success message

// use of useEffect to fetch product details from the API using dummyjson.com
  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        setError("Failed to fetch product details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetail();
  }, [id]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setMessage("Product added to cart! Successfully ✅");
    
    // Hide message after 2 seconds
    setTimeout(() => setMessage(""), 2000);
  };

  if (loading) return <p className="text-center text-gray-600">Loading product details...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="container mx-auto mt-[50px] p-6 flex flex-col md:flex-row items-center gap-8 bg-white shadow-lg rounded-lg">
      {/* Product Image (Fixed Image Size) */}
      <div className="w-full md:w-1/2">
        <img 
          src={product.thumbnail} 
          alt={product.title} 
          className="w-[350px] h-[350px] object-cover mx-auto border border-gray-300 rounded-lg shadow-md"
        />
      </div>

      {/* Product Details are fetched and displayed here */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-bold text-gray-800">{product.title}</h2>
        <p className="text-gray-600 text-lg mt-2">{product.description}</p>
        <p className="text-xl font-semibold text-blue-600 mt-4">${product.price}</p>

        {/* Category & Rating */}
        <div className="flex items-center gap-4 mt-4">
          <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded">{product.category}</span>
          <span className="text-black-500 text-lg">⭐ {product.rating}</span>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="bg-indigo-600 text-white px-6 py-2 mt-6 rounded-lg hover:bg-green-500 transform scale-95 hover:scale-100 transition duration-300 ease-in-out"
        >  
          Add to Cart 🛒
        </button>

        {/* Success Message */}
        {message && <p className="text-green-600 text-sm mt-2">{message}</p>}
      </div>
    </div>
  );
};

export default ProductDetail;
