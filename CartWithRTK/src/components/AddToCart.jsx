import { useSelector } from "react-redux";

export const AddToCart = () => {
  const selector = useSelector((state) => state.cart.value);
  console.log(selector);
  return (
    <div className="cart-container">
      <span className="cart-icon">🛒</span>
      <span className="cart-count">{selector}</span>
    </div>
  );
};
