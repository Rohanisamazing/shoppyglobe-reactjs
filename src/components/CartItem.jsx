import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  // Function to handle removing an item from the cart when user clicks on 'Remove' button
  return (
    <div className="border p-4 mb-4 rounded shadow-md bg-white flex justify-between items-center">
      <img src={item.thumbnail} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
      <div>
        <h3 className="text-lg font-bold">{item.title}</h3>
        <p className="text-gray-600">${item.price} x {item.quantity}</p>
      </div>

      {/* Adding button to remove item from cart */}
      <button
        onClick={() => dispatch(removeFromCart(item.id))}
        className="bg-red-600 text-white px-3 py-1 rounded"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
