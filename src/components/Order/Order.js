import React from 'react';
import useProducts from '../../hook/useProducts';

const Order = () => {
      const [ products, setProducts] = useProducts();
      return (
            <div>
                  <h1>welcome to order: { products.length }</h1>
            </div>
      );
};

export default Order;