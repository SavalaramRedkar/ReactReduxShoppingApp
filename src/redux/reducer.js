import { combineReducers } from "redux";
import {
  REMOVE_SELECTED_PRODUCT,
  SELECTED_PRODUCT,
  SET_PRODUCTS,
} from "./actionTypes";

const initialStateAllProducts = {
  products: [],
};

const productReducer = (state = initialStateAllProducts, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, products: action.payload };

    default:
      return state;
  }
};

const initialStateSelectedProduct = {
  product: {},
};

const selectedProductReducer = (
  state = initialStateSelectedProduct,
  action
) => {
  switch (action.type) {
    case SELECTED_PRODUCT:
      return { ...state, product: { ...action.payload } };
    case REMOVE_SELECTED_PRODUCT:
      return { product: {} };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  allProducts: productReducer,
  selectedProduct: selectedProductReducer,
});

export default rootReducer;
