import React from "react";
import products from "../../products";

export default React.createContext({
  products,
  cart: [],
  addProductToCart: product => {},
  removeProductFromCart: productId => {}
});
