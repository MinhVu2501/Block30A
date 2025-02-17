import { useCart } from "../contexts/CartContext";

const Checkout = () => {
  const { cart, clearCart } = useCart();

  const handleCheckout = () => {
    console.log("Checking out books:", cart);
    clearCart(); 
  };

  return (
    <div>
      <h1>Checkout</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty. Add some books before checking out.</p>
      ) : (
        <>
          <ul>
            {cart.map((book) => (
              <li key={book.id}>
                {book.title} by {book.author}
              </li>
            ))}
          </ul>
          <button onClick={handleCheckout}>Checkout</button>
        </>
      )}
    </div>
  );
};

export default Checkout;
