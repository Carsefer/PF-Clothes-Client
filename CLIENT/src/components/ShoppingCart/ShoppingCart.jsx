import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  getCartProducts,
  delProductCart,
  clearCart,
  buyProduct,
  postHistorial,
  clearLink,
  sendEmail,
  sendEmailSellers,
  deleteRegister,
} from "../../redux/actions";
import CartItem from "../CartItem/CartItem";
import Style from "./ShoppingCart.module.css";
import NavBar from "../NavBar/NavBar";
import { getUserData } from "../../Utils/useLocalStorage";
import { validateUser } from "../../sessionUtils/jwtSession";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");

  const cartList = useSelector((state) => state?.cart);
  const compra = useSelector((state) => state.linkCompra);

  useEffect(() => {
    (async () => {
      if (!user) {
        const data = await getUserData();
        setUser(data?.id);
        setEmail(data?.mail);
      }
    })();
    const id = user;
    const token = validateUser();
    dispatch(getCartProducts(id, token));
    dispatch(deleteRegister(id));
  }, [user, dispatch]);
  const token = validateUser();

  console.log(cartList);

  //COMPRAR (NO BORRAR)
  // const handleCompra = (e) => {
  //   e.preventDefault();
  //   window.open(compra);
  //   dispatch(postHistorial(user, cartList));
  //   dispatch(clearCart(user, token));
  //   dispatch(clearLink());
  // };

  //COMPRAR
  const handleCompra = (e) => {
    e.preventDefault();
    window.location.href = compra;
    dispatch(postHistorial(user, cartList));
    //dispatch(sendEmail(email, cartList));
    //dispatch(sendEmailSellers(email, cartList));
    dispatch(clearCart(user, token));
    dispatch(clearLink());
  };

  var repetidos = {};
  cartList.forEach(function (numero) {
    repetidos[numero.variantID] = (repetidos[numero.variantID] || 0) + 1;
  });

  return (
    <>
      <NavBar />
      <div className={Style.containerShopping}>
        <h2>Carrito de Compras</h2>
        {cartList.length ? (
          <div>
            <h3>Productos</h3>
            <button className={Style.CleanCartButtons} onClick={() => dispatch(clearCart(user, token))}>
                Limpiar Carrito
              </button>
            <article className={Style.CartBox}>
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
                    quantity={repetidos[e?.variantID]}
                    image={e?.image}
                    delProductCart={() =>
                      dispatch(delProductCart(e?.variantID, user, token))
                    }
                    size={e.size}
                    color={e.color}
                    demographic={e.demographic}
                  />
                ))}
            </article>
          </div>
        ) : (
          <p className={Style.NoCart}>
            Aun no tienes productos agregado al carrito.{" "}
            <Link className={Style.CartLink} to="/home">Encontralos!</Link>
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
            <button className={Style.CleanCartButtons} onClick={() => dispatch(buyProduct(user, cartList))}>
              CARGAR PRODUCTOS
            </button>
            <button className={Style.CleanCartButtons} disabled={!compra} onClick={(e) => handleCompra(e)}>
              COMPRAR PRODUCTOS
            </button>
            {/*<button className={Style.CleanCartButtons}  onClick={(e) => handleCompra(e)}>COMPRAR PRODUCTOS</button>*/}
          </div>
        ) : (
          <p></p>
        )}
      </div>
    </>
  );
};

export default ShoppingCart;

/*
<button onClick={() => dispatch(buyProduct(user, cartList))}>
              CARGAR PRODUCTOS
            </button>
            <button disabled={!compra} onClick={(e) => handleCompra(e)}>
              COMPRAR PRODUCTOS
            </button>*/