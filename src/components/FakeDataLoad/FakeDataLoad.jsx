import React from 'react';
import'./FakeDataLoad.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const FakeDataLoad = (props) => {
   
    const{img,name,seller,price,ratings}=props.producted;
    const addToCards=props.addToCarded;
    return (
        <div className='cards-border'>
            <img src={img} alt="" srcset="" />
            <div className='text-size1'>
            
            <h3>Name:{name}</h3>
            </div>
            
            <div className='text-size2'>
            <h3>Seller:{seller}</h3>
            <h3>Price:${price}</h3>
            
            <h3>Ratings:{ratings}</h3>
            </div>
            <button className='add-btn' onClick={()=>addToCards(props.producted)}>Add Cart <FontAwesomeIcon icon={faShoppingCart}/></button>
            
            
        </div>
    );
};

export default FakeDataLoad;