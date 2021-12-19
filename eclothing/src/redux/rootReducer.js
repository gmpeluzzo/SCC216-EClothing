import { combineReducers } from 'redux';
import productReducer from './state.reducer';

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
