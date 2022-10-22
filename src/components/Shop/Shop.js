import React from 'react';
import { useState } from 'react';
import './Shop.css';
import fakeData from '../products.JSON';



const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    console.log(products)
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <li>{product.name} </li>)
                }
            </div>
            <div className="cart-container">
                <h2>This is cart </h2>
            </div>
        </div>
    );
};

export default Shop;