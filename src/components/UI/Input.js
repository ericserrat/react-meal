import React from 'react';
import classes from './Input.module.css';
import PropTypes from 'prop-types';

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

Input.displayName = 'Input';

Input.propTypes = {
  label: PropTypes.string,
  input: PropTypes.object,
};

export default Input;