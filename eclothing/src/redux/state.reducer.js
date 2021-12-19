import { ADD_PRODUCT, UPDATE_PRODUCT, REMOVE_PRODUCT } from "./state.types";

const INTIIAL_STATE = {
  products: [],
};

const productReducer = (state = INTIIAL_STATE, action) => {
  const { type, payload } = action;
  switch (action.type) {
    default:
      return state;
  }
};

export default productReducer;
