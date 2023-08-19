import React from 'react';
import './OrderItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTrash } from '@fortawesome/free-solid-svg-icons';

const OrderItems = ({product,handleDeleteCart}) => {
    console.log(product);
    const{id,price,name,img,quantity}=product;
    return (
        <div className='carts'>
            <div className='products'>
            <img className='image' src={img}  alt="" srcset="" />
            <div className='products-review'>
            <h3 className='text'>{name}</h3>
            <p>Price:${price}</p>
        <p>Quantity:{quantity}</p>
            </div>
          

            </div>
            <div>
                <button onClick={()=>handleDeleteCart(id)} className='btn'><FontAwesomeIcon icon={faTrash} className='d-color'/></button>
            </div>
           
        </div>
    );
};

export default OrderItems;