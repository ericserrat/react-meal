import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classes from './Modal.module.css';

const Backdrop = props => {
  return <div className={classes.backdrop} onClick={props.onClick}/>;
};

Backdrop.propTypes = {
  onClick: PropTypes.func,
};

const ModalOverlay = props => {
  return (
    <div className={classes.modal}>
      <div>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = props => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClick={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func,
};

export default Modal;