import { useSelector, useDispatch } from "react-redux";
import { addToCart, clearCart, delFromCart } from "../../redux/actions";
import CartItem from "../CartItem/CartItem";

const ShoppingCart = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.productDetail);

  const { products, cart } = state;

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <h3>Productos</h3>

      <article className="box">
        <button onClick={() => dispatch(clearCart())}>Limpiar Carrito</button>

        {cart.map((item, index) => (
          <CartItem
            key={index}
            data={item}
            delOneFromCart={() => dispatch(delFromCart(item.id))}
            delAllFromCart={() => dispatch(delFromCart(item.id, true))}
          />
        ))}
      </article>
    </div>
  );
};

export default ShoppingCart;
