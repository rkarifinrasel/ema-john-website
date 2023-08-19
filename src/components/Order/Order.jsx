import React, { useEffect, useState } from 'react';
import'./Order.css';
import FakeDataLoad from '../FakeDataLoad/FakeDataLoad';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const Order = () => {
    const [cart,setCart]=useState([]);
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    console.log(cart);
    useEffect(()=>{
        const stored=getShoppingCart();
        const savedCard=[];
        // step 1: get id 
        for(const id in stored){
            //step 2: get the product by using id
            const addedProfduct=products.find(product=>product.id===id);
            if(addedProfduct){
                //step 3: get quantity of the product
                const quantity=stored[id];
                addedProfduct.quantity=quantity;
                //step 4:add the added product to the savedCard
                savedCard.push(addedProfduct);
            }
           console.log("added product",addedProfduct);
        }
        //step 5: set the card
        setCart(savedCard);
    },[products])
    const addToCard=(product)=>{
        const newCart=[...cart,product];
        setCart(newCart);
        addToDb(product.id);
    }

    const handleClearCart=()=>{
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='order-containeer'>
            <div className='products-containeer'>
                {
                    products.map(product=><FakeDataLoad producted={product} key={product.id}
                    addToCarded={addToCard}></FakeDataLoad>)
                }</div>
                <div className='shop-containeer'>

            <Cart card={cart} handleClearCart={handleClearCart}>
                <Link to='/OrderReview'><button className='btn-review'>OrderReview<FontAwesomeIcon icon={faArrowRight}/></button></Link>
            </Cart>
            </div>
        </div>
    );
};

export default Order;