import React from 'react';
import classes from './Loading-Screen.module.scss';
export const LoadingScreen = () => (
  <div className={classes.loading__screen}>
    <div className={classes.wrapper}>
      <div className={classes.text}>
        <img src={require('../../../assests/images/tomato.png')} alt="tomato" />{' '}
        <span>Loading...</span>
      </div>
    </div>
  </div>
);
