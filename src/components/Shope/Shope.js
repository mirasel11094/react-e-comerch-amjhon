import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Product from '../product/Product';
import './Shope.css';

const Shope = () => {
      const [products, setProducts] = useState([])
      const [cart, setCart] = useState([])

      useEffect(() => {
            fetch('products.json')
                  .then(response => response.json())
                  .then(data => setProducts(data));
      },[])
      const handleAddToCart = (product) => {
            console.log(product);
            const newCart = [...cart, product]
            setCart(newCart);
      }
      return (
            <div className="shope-container">
                  <div className="products-container">
                        {
                              
                              products.map(product => <Product
                                    key={ product.id }
                                    product={ product }
                                    handleAddToCart={handleAddToCart}
                              ></Product>)
                        }
                  </div>
                  <div className="card-container">
                        <Card cart={ cart }></Card>
                  </div>
            </div>
      );
};

export default Shope;