import React from 'react';
import classes from './Loading-Screen.module.scss';
import IllustrationChef from '../../../assets/images/chef.svg';
import IllustrationEating from '../../../assets/images/eating_together.svg';
import IllustrationStreet from '../../../assets/images/street_food.svg';
import IllustrationTasting from '../../../assets/images/tasting.svg';

const getRandomIllustration = () => {
  const illustrations = [
    IllustrationChef,
    IllustrationEating,
    IllustrationStreet,
    IllustrationTasting
  ];
  return illustrations[Math.floor(Math.random() * 4)];
};
export const LoadingScreen = () => (
  <div className={classes.loading__screen}>
    <div className={classes.wrapper}>
      <div className={classes.text}>
        <img src={require('../../../assets/images/tomato.png')} alt="tomato" />{' '}
        <span>Loading...</span>
      </div>
      <div className={classes['illustration']}>
        <img src={getRandomIllustration()} alt="Random Illustration" />
      </div>
    </div>
  </div>
);
