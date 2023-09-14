import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    let total = 0;
    let totalShipping = 0;

    for(const product of cart){
        total = total + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    const tax = total * 7 / 100;
    return (
        <div className='cart-container'>
            <h3>Order Summary</h3>
            <p>Selected items:{cart.length} </p>
            <p>Total Price: ${total}</p>  
            <p>Total Shipping Cost: ${totalShipping}</p> 
            <p>Tax: ${tax.toFixed(2)}</p>
            <h5>Grand Total: ${total + totalShipping + tax}</h5>
        </div>
    );
};

export default Cart;