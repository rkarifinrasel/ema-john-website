import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import OrderItems from '../OrderItems/OrderItems';
import './OrderReview.css';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';

const OrderReview = () => {
    const saveCart=useLoaderData();
    const[cart,setCart]=useState(saveCart)
     
const handleDeleteCart=(id)=>{
    const remainingItems=cart.filter(product=>product.id!==id);
    setCart(remainingItems);
    removeFromDb(id);
}
const handleClearCart=()=>{
    setCart([]);
    deleteShoppingCart();
}
     
    return (
        <div className='order-containeer'>
        <div className='cart-containeer'>
            {
cart.map(product => <OrderItems 
    product={product}
handleDeleteCart={handleDeleteCart}

 key={product.id}
>

</OrderItems>)
}
            </div>

            <div className='shop-containeer'>

<Cart card={cart} handleClearCart={handleClearCart}>
    <Link to='/CheckOut'><button className='btn-proceed'>Proceed CheckOut<FontAwesomeIcon icon={faCreditCard}/></button></Link>
</Cart>
</div>
            </div>
    );
};

export default OrderReview;