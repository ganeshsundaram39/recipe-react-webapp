import React from 'react';
import PropTypes from 'prop-types';
import classes from './Input.module.scss';
const Input = props => {
  return (
    <>
      <input
        autoFocus={props.hasAutoFocus ? true : undefined}
        type="text"
        style={props.style}
        className={classes['input']}
        placeholder={props.placeholder}
        onChange={props.handleOnChange}
        value={props.value}
      />
    </>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  hasAutoFocus: PropTypes.string.isRequired
};

export default Input;
