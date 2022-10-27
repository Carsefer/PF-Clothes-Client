import { useSelector, useDispatch } from "react-redux";
import {
  getCartProducts,
  clearCart,
  delFromCart,
  delProductCart,
  buyProduct,
} from "../../redux/actions";
import axios from "axios";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import CartItem from "../CartItem/CartItem";
import { getSession } from "../../sessionUtils/jwtSession";
import Style from "./ShoppingCart.module.css";
import NavBar from "../NavBar/NavBar";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const [info, setInfo] = useState("");
  const [us, setUs] = useState(null);

  const cartList = useSelector((state) => state?.cart);
  const compra = useSelector((state) => state.linkCompra);

  const url = "http://localhost:3001/user/get";
  useEffect(() => {
    (async () => {
      if (!info) {
        const data = await getSession();
        setInfo(data);
      }

      if (info) {
        console.log("info before request", info);
        await axios
          .post(
            url,
            {},
            {
              headers: {
                Authorization: `Bearer ${info.token}`,
              },
            }
          )
          .then((res) => {
            console.log(res.data);
            setUs(res?.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    })();
    const id = us?.id;
    dispatch(getCartProducts(id));
  }, [info, dispatch, us?.id]);

  return (
    <>
      <NavBar />
      <div className={Style.containerShopping}>
        <h2>Carrito de Compras</h2>
        {cartList.length ? (
          <div>
            <h3>Productos</h3>

            <article className="box">
              <button onClick={() => dispatch(clearCart(us?.id))}>
                Limpiar Carrito
              </button>

              {cartList?.map((e) => (
                <CartItem
                  key={e?.id + 1}
                  name={e?.name}
                  price={e?.price}
                  quantity="1"
                  image={e?.image}
                  delOneFromCart={() =>
                    dispatch(delProductCart(e?.id, us?.id)).then(
                      dispatch(delFromCart(e.id))
                    )
                  }
                  delAllFromCart={() => dispatch(delFromCart(e.id, true))}
                />
              ))}
            </article>
          </div>
        ) : (
          <p>
            Aun no tienes productos agregado al carrito.{" "}
            <Link to="/home">Encontralos!</Link>
          </p>
        )}
        {cartList.length ? (
          <div>
            <button onClick={() => dispatch(buyProduct(cartList))}>
              CARGAR PRODUCTOS
            </button>
            <a href={compra}>
              <button disabled={!compra} onClick={() => dispatch(clearCart())}>
                COMPRAR PRODUCTOS
              </button>
            </a>
          </div>
        ) : (
          <p></p>
        )}
      </div>
    </>
  );
};

export default ShoppingCart;
