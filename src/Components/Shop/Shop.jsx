import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);
    
    
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[]);

    useEffect(()=>{
        const storedCart = getShoppingCart();
        let saveCart = []
        // 1. Get id
        for(const id in storedCart){
            //1. Get id using find
            const addedProduct = products.find(product => product.id === id);
            //2.Get Quantity
            
            //3.set quantity
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                //set saveCart in to new array
                saveCart.push(addedProduct);
            }
            
        }
        setCart(saveCart);
    },[products])

    const handleAddToCart = (product) =>{
        const newCart = [...cart,product]
        setCart(newCart);
        addToDb(product.id);
    }
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product
                    key = {product.id}
                    product = {product}
                    handleAddToCart = {handleAddToCart}
                    ></Product>)
                }
            </div>
            <div>
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;