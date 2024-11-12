import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../features/product/productSlice";

function Shop() {
  const product = useSelector((state) => state.product.products);
  const dispatch = useDispatch()
  // console.log(product);
  
  const handle = (product) => {
    console.log(product);
    
  }
  return (
    <>
      {/* Start Hero Section */}
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>Shop</h1>
              </div>
            </div>
            <div className="col-lg-7"></div>
          </div>
        </div>
      </div>
      {/* End Hero Section */}

      <div className="untree_co-section product-section before-footer-section">
        <div className="container">
          <div className="row">
            {/* Start Column 1 */}
            {product.map((product) => (
              <div className="col-12 col-md-4 col-lg-3 mb-5">
                <Link className="product-item" onClick={()=> dispatch(addToCart(product))}>
                  <img
                    src={product.image}
                    className="img-fluid product-thumbnail"
                  />
                  <h3 className="product-title">{product.title}</h3>
                  <strong className="product-price">${product.price}</strong>
                  <span className="icon-cross">
                    <img src="images/cross.svg" className="img-fluid" />
                  </span>
                </Link>
              </div>
            ))}

            {/* End Column 1 */}

            {/* Start Column 2 */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;
