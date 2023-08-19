import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
const Cart = ({card,handleClearCart,children}) => {
    const carted=card;
    
    
    let totalPrice=0;
    let quantity=0;
    
    for(const carts of carted){
        if(carts.quantity==0){
            carts.quantity=1;
        }
        //shortcat solution
        // carts.quantity=carts.quantity||1;
totalPrice=totalPrice+(carts.price*carts.quantity);
quantity=quantity+carts.quantity;

    }
    let totalShipping=0;
    for(const shipp of carted){
        totalShipping=totalShipping+(shipp.shipping*shipp.shipping);
    }
    const tax=totalPrice*7/100;
    const grandTotal=totalPrice+totalShipping+tax;
    
   
    return (
        <div className='cart'>
           <div className='text-position'>
           <h3 className='text'>Order Summary</h3>
            <p>Selected Item:{quantity}</p>
            <p>Total Price:${totalPrice}</p>
            <p>Total Shipping:{totalShipping}</p>
            <p>Tax:${tax.toFixed(2)}</p>
            <p>Grand Total:{grandTotal.toFixed(2)}</p>
            <button onClick={handleClearCart} className='clear-chart'>Clear Chart<FontAwesomeIcon icon={faTrash}/></button>
{children}
           </div>
        </div>
    );
};

export default Cart;