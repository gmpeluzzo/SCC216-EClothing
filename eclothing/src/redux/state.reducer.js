import { ADD_PRODUCT, UPDATE_PRODUCT, REMOVE_PRODUCT } from './state.types'

const INTIIAL_STATE = {
    products: []
}

const productReducer = (state = INTIIAL_STATE, action) => {
    const {type, payload} = action;
    switch(action.type){
        case ADD_PRODUCT:
        case REMOVE_PRODUCT:
        case UPDATE_PRODUCT:            
        default: 
            return state;
    }
}

export default productReducer;