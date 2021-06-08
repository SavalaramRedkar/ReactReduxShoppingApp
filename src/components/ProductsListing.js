import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/actions";
import { Link } from "react-router-dom";

const ProductsListing = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;

    return (
      <div style={{ margin: "10px" }} key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <div
      className="ui grid container"
      style={{ marginTop: "40px", marginBottom: "40px" }}
    >
      {products.length === 0 ? <div>Loading...</div> : renderList}
    </div>
  );
};

export default ProductsListing;
