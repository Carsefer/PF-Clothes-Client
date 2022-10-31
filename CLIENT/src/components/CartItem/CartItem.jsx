import { Link } from "react-router-dom";
import "./CartItem.css";

const CartItem = ({
  id,
  name,
  price,
  quantity,
  image,
  delOneFromCart,
  delAllFromCart,
  size,
  color,
  demographic,
}) => {
  return (
    <div style={{ borderBottom: "thin solid gray" }}>
      <h4 className="NameCart">
        {name} {size} {color} {demographic}
      </h4>
      <Link to= {`/home/product/${id}`} >
      <img className="imageCart" src={image} alt="img not found"></img>
      </Link>
      <h5 className="DetailCart">
        ${price}.00 x {quantity} = ${price * quantity}.00
      </h5>
      <div className="ButtonsCart">
        <button onClick={delOneFromCart}>Eliminar Uno</button>
        <br />
        {/* <button onClick={() => delAllFromCart(id, true)}>Eliminar Todos</button> */}
        <br />
        <br />
      </div>
    </div>
  );
};

export default CartItem;
