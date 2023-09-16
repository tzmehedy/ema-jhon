import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    let total = 0;
    let totalShipping = 0;
    let quantity = 0;

    for(const product of cart){
        product.quantity = product.quantity || 1;
        total = total + product.price*product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity
    }
    const tax = total * 7 / 100;
    return (
        <div className='cart-container'>
            <h3>Order Summary</h3>
            <p>Selected items:{quantity} </p>
            <p>Total Price: ${total}</p>  
            <p>Total Shipping Cost: ${totalShipping}</p> 
            <p>Tax: ${tax.toFixed(2)}</p>
            <h5>Grand Total: ${total + totalShipping + tax}</h5>
        </div>
    );
};

export default Cart;