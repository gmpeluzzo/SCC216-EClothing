import React, { useReducer, useState, useEffect } from "react";

import ShopContext from "./shop-context";
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT } from "./reducers";
// import products from "../../products";

const GlobalState = props => {

  const previousCart = JSON.parse(localStorage.getItem("cart")) ?? [];

  const [cartState, dispatch] = useReducer(shopReducer, { cart: previousCart });

  const addProductToCart = product => {
    dispatch({ type: ADD_PRODUCT, product: product });
  };

  const removeProductFromCart = productId => {
    dispatch({ type: REMOVE_PRODUCT, productId: productId });
  };

  const [products, setProducts] = useState({})
  
  useEffect(() => {
    fetch("http://localhost:9000/products/", {
      method: "GET",
      headers: {"Content-Type": "application/json"},
    })
    .then(response => response.json())
    .then((productArray) => {
      const productDict = {}
      productArray.forEach(({ _id, name, price, description, image, quantity }) => {
        productDict[_id] = {
          id: _id,
          name,
          price,
          description,
          image,
          stock: quantity
        };
      });
      setProducts(productDict);
    }).then(_ => console.log(products))
    .catch((err) => console.log(err));
  }, [])


  return (
    <ShopContext.Provider
      value={{
        products: products,
        cart: cartState.cart,
        addProductToCart,
        removeProductFromCart,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default GlobalState;