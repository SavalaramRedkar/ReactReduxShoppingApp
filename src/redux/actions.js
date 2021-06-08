import axios from "axios";
import {
  REMOVE_SELECTED_PRODUCT,
  SELECTED_PRODUCT,
  SET_PRODUCTS,
} from "./actionTypes";

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: REMOVE_SELECTED_PRODUCT,
  };
};

export const fetchProducts = () => {
  return (dispatch) => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        dispatch(setProducts(response.data));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
};

export const fetchProductDetails = (id) => {
  return (dispatch) => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        dispatch(selectedProduct(response.data));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
};
