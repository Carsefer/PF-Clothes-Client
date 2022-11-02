import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  getCartProducts,
  delProductCart,
  delFromCart,
  clearCart,
  buyProduct,
  postHistorial,
  clearLink,
  sendEmail,
  sendEmailSellers,
} from "../../redux/actions";
import CartItem from "../CartItem/CartItem";
import Style from "./ShoppingCart.module.css";
import NavBar from "../NavBar/NavBar";
import { getUserData } from "../../Utils/useLocalStorage";
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
    const id = user?.id;
    const token = validateUser();
    dispatch(getCartProducts(id, token));
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
    //window.location.href = compra;
    dispatch(postHistorial(user.id, cartList));
    dispatch(sendEmail(user?.mail, cartList));
    // dispatch(sendEmailSellers(user?.mail, cartList));
    dispatch(clearCart(user?.id, token));
    dispatch(clearLink());
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
                  if (!arr.find((d) => d.variantID === el.variantID)) {
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
                    delProductCart={() =>
                      dispatch(delProductCart(e?.variantID, user?.id, token))
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
            {/* <button onClick={() => dispatch(buyProduct(user?.id, cartList))}>
              CARGAR PRODUCTOS
            </button> */}
            {/* <button disabled={!compra} onClick={(e) => handleCompra(e)}>
              COMPRAR PRODUCTOS
            </button> */}
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
