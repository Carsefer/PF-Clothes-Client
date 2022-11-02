import { Link } from "react-router-dom";
import "./CartItem.css";

const CartItem = ({
  id,
  name,
  price,
  quantity,
  image,
  delProductCart,
  size,
  color,
  demographic,
}) => {
  return (
    <div className="cartItem">
      <h4 className="NameCart">
        {name} {size} {color} {demographic}
      </h4>
      <Link to={`/home/product/${id}`}>
        <img className="imageCart" src={image} alt="img not found"></img>
      </Link>
      <h5 className="DetailCart">
        ${price}.00 x {quantity} = ${price * quantity}.00
      </h5>
      <div className="ButtonsCart">
        <button onClick={() => delProductCart(id)}>Eliminar producto</button>
        <br />
        {/* <button onClick={() => delAllFromCart(id, true)}>Eliminar Todos</button> */}
        <br />
        <br />
      </div>
    </div>
  );
};

export default CartItem;
