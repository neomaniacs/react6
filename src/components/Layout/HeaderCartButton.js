import styled from './HeaderCartButton.module.css' ;
import CartIcon from '../Cart/CartIcon';


import React from 'react';

const HeaderCartButton = (props) => {
    return <button className={styled.button}>
        <span className={styled.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={styled.badge}>
            3
        </span>
    </button>
} ;

export default HeaderCartButton ;