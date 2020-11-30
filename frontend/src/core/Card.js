import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
// import { addItemToCart, removeItemFromCart } from "./helper/cartHelper";
import ImageHelper from "./helper/ImageHelper";

const Card = ({
  product,
  addtoCart = true,
  removeFromCart = false,
  setReload = f => f,  //this line means function(f) return f;
  reload = undefined,
}) => {
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);

  const cardTitle = product ? product.name : "A photo from pexels";
  const cardDescription = product ? product.description : "Default Description";
  const cardPrice = product ? product.price : "Default";
  const cardStock = product ? product.stock : "Default";

  // const addToCart = () => {
  //   addItemToCart(product, () => setRedirect(true));
  // };

  const getARedirect = (redirect) => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };

 {/** */}
  // const showAddToCart = (addtoCart) => {
    // return (
    //   addtoCart && (
    //     <button
    //       onClick={addToCart}
    //       className="btn btn-block btn-outline-success mt-2 mb-2"
    //     >
    //       Add to Cart
    //     </button>
    //   )
    // );
  // };

  // const showRemoveFromCart = (removeFromCart) => {
  //   return (
  //     removeFromCart && (
  //       <button
  //         onClick={() => {
  //           removeItemFromCart(product._id);
  //           setReload(!reload)
  //         }}
  //         className="btn btn-block btn-outline-danger mt-2 mb-2"
  //       >
  //         Remove from cart
  //       </button>
  //     )
  //   );
  // };

  return (
    <div className="card text-white bg-dark border border-info ">
      <div className="card-header lead"><strong>{cardTitle}</strong></div>
      <div className="card-body">
        {getARedirect(redirect)}
        <ImageHelper product={product} />
        <p className="lead bg-primary font-weight-normal text-wrap">
          {cardDescription}
        </p>
        <p className="btn btn-warning rounded  btn-sm px-4"> Grade -  {cardPrice}</p> <br/> 
        <p className="btn btn-success rounded  btn-sm px-4"> Gender -  {cardStock}</p>

     {/* <div className="row">
          <div className="col-12">{showAddToCart(addtoCart)}</div>
          <div className="col-12">{showRemoveFromCart(removeFromCart)}</div>
        </div>*/}   
      </div>
    </div>
  );
};

export default Card;
