import React, { useEffect, useState } from 'react';
import './Shop.css';

const Shop = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])
    return (
        <div className='shop-container'>
            <div>
                <h1>card</h1>
                <p>product count: {products.length}</p>
            </div>
            <div>
                <h1>sumamry</h1>
            </div>
            
        </div>
    );
};

export default Shop;