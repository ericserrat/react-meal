import React from 'react';
import classes from './Input.module.css';
import PropTypes from 'prop-types';

const Input = props => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  input: PropTypes.object,
};

export default Input;