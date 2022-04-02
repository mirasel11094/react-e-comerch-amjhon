import React from 'react';
import './Card.css';

const Card = ({ cart }) => {
      // console.log(cart);
      let total = 0;
      let shipping = 0;
      let quantity = 0;
      for (const product of cart) {
            quantity = quantity + product.quantity;
            total = total + product.price * product.quantity;
            shipping = shipping + product.shipping;
      }
      const tax =parseFloat((total * 10 / 100).toFixed(2));
      const grandtotal = total + shipping + tax;
      return (
            <div className="card">
            <h2>Order Summary</h2>
            <p>Selected Items: {quantity }</p>
                  <p>Total Price: ${total }</p>
                  <p>Total Shipping Charge: ${shipping }</p>
                  <p>Tax: ${tax }</p>
                  <p>Grand Total: ${grandtotal.toFixed(2)}</p>
            </div>
      );
};

export default Card;
