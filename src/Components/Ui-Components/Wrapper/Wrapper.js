import React from 'react';
import classes from './Wrapper.module.scss';
export const Wrapper = props => (
  <div className={classes.wrapper} style={props.dimensions}>
    {props.children}
  </div>
);
