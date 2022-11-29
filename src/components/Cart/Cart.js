import React from 'react';
import Modal from '../UI/Modal';
import PropTypes from 'prop-types';
import classes from './Cart.module.css';

const Cart = props => {
  const cartItems = [{id: 'c1', name: 'Sushi', amount: 2, price: 12.99}].map(i => <li key={i.id}>{i.name}</li>);

  return (
    <Modal onClose={props.onClose}>
      <ul className={classes['cart-items']}>
        {cartItems}
      </ul>
      <div className={classes.total}>
        <span>Total amount</span>
        <span>35.64</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

Cart.propTypes = {
  onClose: PropTypes.func,
};

export default Cart;