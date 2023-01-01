import styled from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import { useContext } from "react";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id) ;
  };
  const cartItemAddItemHandler = (item) => {
    cartCtx.addItem({...item, amount: 1}) ;
  };

  const cartItems = (
    <ul className={styled["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddItemHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={styled.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styled.actions}>
        <button className={styled["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={styled.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
