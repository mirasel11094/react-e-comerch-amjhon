import React from 'react';
import './Card.css'

const Card = ({cart}) => {
      return (
            <div>
            <h2>Order Summary</h2>
            <p>Selected Items: {cart.length }</p>
            </div>
      );
};

export default Card;