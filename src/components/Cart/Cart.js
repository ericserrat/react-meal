import React, {useContext} from 'react';
import Modal from '../UI/Modal';
import PropTypes from 'prop-types';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = props => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = item => {
    cartCtx.addItem({...item, amount: 1});
  };

  const cartItemRemoveHandler = id => {
    cartCtx.removeItem(id);
  };

  const cartItems = cartCtx.items.map((i) => (
    <CartItem
      key={i.id}
      name={i.name}
      price={i.price}
      amount={i.amount}
      onAdd={cartItemAddHandler.bind(null, i)}
      onRemove={cartItemRemoveHandler.bind(null, i.id)}
    />
  ));

  return (
    <Modal onClose={props.onClose}>
      <ul className={classes['cart-items']}>
        {cartItems}
      </ul>
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

Cart.propTypes = {
  onClose: PropTypes.func,
};

export default Cart;