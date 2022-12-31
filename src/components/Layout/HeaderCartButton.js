import styled from './HeaderCartButton.module.css' ;
import CartIcon from '../Cart/CartIcon';
import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {

    const cartCtx = useContext(CartContext) ;

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount ;
    }, 0) ;

    return <button className={styled.button} onClick={props.onClick}>
        <span className={styled.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={styled.badge}>
            {numberOfCartItems}
        </span>
    </button>
} ;

export default HeaderCartButton ;