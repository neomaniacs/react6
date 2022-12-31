import Modal from "../UI/Modal";
import styled from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={styled["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li id={item.id} key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div>
            <span>Total Amount</span>
            <span>35.62</span>
      </div>
      <div className={styled.actions}>
        <button className={styled['button--alt']} onClick={props.onClose}>Close</button>
        <button className={styled.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
