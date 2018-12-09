import React from 'react';
import classes from './Button.module.scss';
export const Button = props => (
  <button className={classes[props.button__Type]}>{props.children}</button>
);
