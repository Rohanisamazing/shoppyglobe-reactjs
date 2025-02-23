import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className="container mx-auto  p-4">
      <h2 className="text-2xl font-bold text-center mt-4 mb-6">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
        {/* Unique key using item.id */}
          {cartItems.map((item) => <CartItem key={item.id} item={item} />)}   
          <Link to="/checkout" className="bg-green-600 text-white px-4 py-2 rounded mt-4 inline-block">
            Proceed to Checkout
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;


