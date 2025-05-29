import { useCart } from "../Components/CartContext";
import { MdOutlineShoppingCart, MdDelete } from "react-icons/md";

function Cart() {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();

  // Optionally, implement removeFromCart and clearCart in your CartContext
  // For demo: removeFromCart removes one item; clearCart empties the cart

  const getTotal = () =>
    cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <MdOutlineShoppingCart /> Cart
      </h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <ul className="divide-y divide-gray-200">
            {cart.map((item) => (
              <li key={item.id} className="py-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={item.images}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div>
                    <div className="font-semibold">{item.name}</div>
                    <div className="text-sm text-gray-500">
                      ₦{item.price.toLocaleString()} × {item.quantity}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 p-2"
                  title="Remove"
                >
                  <MdDelete size={20} />
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-between items-center">
            <div className="font-bold text-lg">
              Total: ₦{getTotal().toLocaleString()}
            </div>
            <button
              onClick={clearCart}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;