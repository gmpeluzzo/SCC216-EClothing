import { combineReducers } from 'redux';

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

const rootReducer = combineReducers({
    productReducer
});

export default rootReducer;
