import React from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart = () => {
  const cartItems = [{id: 'c1', name: 'Sushi', amount: 2, price: 12.99}].map(i => <li key={i.id}>{i.name}</li>);

  return (
    <Modal>
      <ul className={classes['cart-items']}>
        {cartItems}
      </ul>
      <div className={classes.total}>
        <span>Total amount</span>
        <span>35.64</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;