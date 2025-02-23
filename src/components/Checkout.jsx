import { useSelector } from "react-redux";
import { useState } from "react";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleOrder = () => {
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    setOrderPlaced(true);
    setTimeout(() => setOrderPlaced(false), 3000);
  };

  const validateEmail = (email) => {
    // Basic email validation regex
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  return (
    <div className="container mt-14 mx-auto p-6 max-w-lg bg-white shadow-2xl lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Checkout</h2>

      {orderPlaced ? (
        <p className="text-green-600 text-center text-lg">🎉 Order placed successfully!</p>
      ) : (
        <>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Total Amount: <span className="text-blue-600">${totalAmount.toFixed(2)}</span></h3>
          </div>

          {/* Customer Info Form */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-lg p-2"
              required
            />
            
            <input
              type="email"
              placeholder="Email Address"
              className={`w-full border rounded-lg p-2 ${emailError ? "border-red-500" : ""}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {/* Error message for email validation */}
            {emailError && <p className="text-red-500 text-sm">{emailError}</p>}

            <input
              type="text"
              placeholder="Shipping Address"
              className="w-full border rounded-lg p-2"
              required
            />

            <button
              type="button"
              onClick={handleOrder}
              className="w-full bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition"
            >
              Place Order ✅
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default Checkout;
