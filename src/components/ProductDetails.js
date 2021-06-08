import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetails, removeSelectedProduct } from "../redux/actions";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();

  useEffect(() => {
    dispatch(fetchProductDetails(productId));

    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  const product = useSelector((state) => state.selectedProduct.product);
  const { title, image, price, description, category } = product;

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} alt={title} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <span className="ui teal tag label">${price}</span>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
