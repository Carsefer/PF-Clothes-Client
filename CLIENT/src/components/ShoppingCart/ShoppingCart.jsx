import { useSelector, useDispatch } from "react-redux";

import {
  getCartProducts,
  clearCart,
  delFromCart,
  delProductCart,
  buyProduct,
  postHistorial,
  clearLink,
  sendEmail,
  sendEmailSellers,
} from "../../redux/actions";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import CartItem from "../CartItem/CartItem";
import { getUserData } from "../../Utils/useLocalStorage";
import Style from "./ShoppingCart.module.css";
import NavBar from "../NavBar/NavBar";
import { validateUser } from "../../sessionUtils/jwtSession";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  const cartList = useSelector((state) => state?.cart);
  const compra = useSelector((state) => state.linkCompra);

  useEffect(() => {
    (async () => {
      if (!user) {
        const data = await getUserData();
        setUser(data);
      }
    })();
    const token = validateUser();

    dispatch(getCartProducts(user?.id, token));
  }, [user, dispatch]);
  const token = validateUser();

  console.log(cartList);

  //COMPRAR (NO BORRAR)
  // const handleCompra = (e) => {
  //   e.preventDefault();
  //   window.open(compra);
  //   dispatch(postHistorial(user.id, cartList));
  //   dispatch(clearCart(user?.id, token));
  //   dispatch(clearLink());
  // };

  //COMPRAR
  const handleCompra = (e) => {
    e.preventDefault();
    dispatch(postHistorial(user.id, cartList));
    dispatch(sendEmail(user?.mail, cartList));
    dispatch(sendEmailSellers(user?.mail, cartList));
    dispatch(clearCart(user?.id, token));
    navigate("/home");
  };

  var repetidos = {};

  cartList.forEach(function (numero) {
    repetidos[numero.id] = (repetidos[numero.id] || 0) + 1;
  });

  return (
    <>
      <NavBar />
      <div className={Style.containerShopping}>
        <h2>Carrito de Compras</h2>
        {cartList.length ? (
          <div>
            <h3>Productos</h3>
            <article className="box">
              <button onClick={() => dispatch(clearCart(user?.id, token))}>
                Limpiar Carrito
              </button>

              {cartList
                .reduce((arr, el) => {
                  if (!arr.find((d) => d.id === el.id)) {
                    arr.push(el);
                  }

                  return arr;
                }, [])
                .map((e) => (
                  <CartItem
                    id={e?.id}
                    key={e?.id + 1}
                    name={e?.name?.charAt(0).toUpperCase() + e.name?.slice(1)}
                    price={e?.price}
                    quantity={repetidos[e?.id]}
                    image={e?.image}
                    delOneFromCart={() =>
                      dispatch(delProductCart(e?.id, user?.id, token))
                    }
                    // delAllFromCart={() => dispatch(delFromCart(e.id, true))}
                    size={e.size}
                    color={e.color}
                    demographic={e.demographic}
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
          <h1>
            TOTAL: ${cartList?.map((el) => el.price).reduce((a, b) => a + b)}
          </h1>
        ) : (
          <></>
        )}
        {cartList.length ? (
          <div>
            {/* <button onClick={() => dispatch(buyProduct(cartList))}>
              CARGAR PRODUCTOS
            </button> */}
            {/* <a href={compra}>
              <button disabled={!compra} onClick={(e) => handleCompra(e)}>
                COMPRAR PRODUCTOS
              </button>
            </a> */}
            <button onClick={(e) => handleCompra(e)}>COMPRAR PRODUCTOS</button>
          </div>
        ) : (
          <p></p>
        )}
      </div>
    </>
  );
};

export default ShoppingCart;
