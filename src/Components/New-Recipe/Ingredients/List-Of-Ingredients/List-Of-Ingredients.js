import React from 'react';
import classes from './List-Of-Ingredients.module.scss';
import PropTypes from 'prop-types';
var uniqid = require('uniqid');
const ListOfIngredients = props => {
  const ingredients = props.ingredients.map(ingredient => (
    <div className={classes['ingredient']} key={uniqid()}>
      <div
        className={classes['ingredient__image']}
        style={{ backgroundImage: `url(${ingredient.image})` }}
      />
      <div className={classes['ingredient__name']}>{ingredient.name}</div>
    </div>
  ));
  return (
    <>
      <div className={classes['list__of--ingredients']}>{ingredients}</div>
    </>
  );
};

ListOfIngredients.propTypes = { ingredients: PropTypes.array.isRequired };

export default ListOfIngredients;
