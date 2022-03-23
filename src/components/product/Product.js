import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = (props) => {
      // const {handleAddToCart} = props;
      // console.log(props.product);
      // const handleAddToCart = () => {
      //       console.log('clicked');
      // }
      const { id, name, img, ratings, seller, price } = props.product;
      // console.log(props);
      return (
            <div className="product">
                  <img src={ img } alt="" />
                  <div className="product-info">
                        <p className="product-name">{ name }</p>
                        <p>Price: ${ price }</p>
                        <p><small>Manufacturer: {seller }</small></p>
                        <p><small>Ratings: {ratings }</small></p>
                  </div>
                  <button onClick={ () => props.handleAddToCart(props.product) } className="btn-card">
                        <p className="btn-text">Add to cart</p>
                        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                  </button>
            </div>
      );
};

export default Product;