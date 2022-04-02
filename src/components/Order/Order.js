import React from 'react';
import useCart from '../../hook/useCart';
import useProducts from '../../hook/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Card from '../Card/Card';
import ReviewItem from '../ReviewItem/ReviewItem';


const Order = () => {
      const [products, setProducts] = useProducts();
      const [cart, setCart] = useCart(products);

      const handleRemoveProduct = product => {
            const rest = cart.filter(pd => pd.id !== product.id);
            setCart(rest);
            removeFromDb(product.id);

      }
      

      return (
            <div className="shope-container">
                  <div className="review-item-container">
                        {
                              cart.map(product => <ReviewItem
                                    key={product.id} 
                                    product={ product }
                              handleRemoveProduct={handleRemoveProduct}>
                              </ReviewItem>)
                        }      
                  </div>
                  <div className="card-container">
                        <Card cart={cart}></Card>
                  </div>
                 
            </div>
      );
};

export default Order;