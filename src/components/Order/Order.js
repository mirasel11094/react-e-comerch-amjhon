import React from 'react';
import useCart from '../../hook/useCart';
import useProducts from '../../hook/useProducts';

const Order = () => {
      const [products, setProducts] = useProducts();
      const [cart, setCart] = useCart(products);
      return (
            <div>
                  <h1>welcome to order: { products.length }</h1>
                  <p>Cart : {cart.length}</p>
            </div>
      );
};

export default Order;