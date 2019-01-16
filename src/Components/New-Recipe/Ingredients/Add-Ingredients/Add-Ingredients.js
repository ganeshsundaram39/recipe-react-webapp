import React from 'react';
import PropTypes from 'prop-types';
import classes from './Add-Ingredients.module.scss';
import { Ui } from '../../../Ui-Components/Ui-Components';

import DefaultBackground from '../../../../assets/images/imageupload.svg';
const AddIngredients = props => {
  const style = {
    ingredient__name: { width: '100%', fontSize: '1rem' },
    ingredientImage: {
      backgroundImage: `url(${props.ingredient.image})`,
      backgroundSize: props.ingredient.size
    }
  };
  let removeSelectedButton =
    props.ingredient.image !== DefaultBackground ? (
      <button className={classes['btn']} onClick={props.removeSelectedImage}>
        <i className="fas fa-minus" />
      </button>
    ) : null;

  let addImageClasses = classes['btn'];
  if (props.validationErrorElements.image) {
    addImageClasses = [classes['btn'], classes['image__validation']].join(' ');
  }
  let addIngredientToListButtonClasses = 'fas fa-hand-point-right';
  if (props.validationErrorElements.addToList) {
    addIngredientToListButtonClasses = [
      'fas fa-hand-point-right',
      classes['addToListButton__validation']
    ].join(' ');
  }
  return (
    <div className={classes['add__ingredient']}>
      <div className={classes['add__ingredient--input']}>
        <div
          className={classes['upload__btn--wrapper']}
          style={style.ingredientImage}
        >
          {removeSelectedButton}
          <button className={addImageClasses}>
            <i className="fas fa-plus" />
          </button>
          <input
            type="file"
            name="myfile"
            accept="image/*"
            onChange={props.handleOnFileChange}
          />
        </div>
        <div className={classes['ingredient__name']}>
          <Ui.Input
            placeholder="Name & Qty?"
            style={style['ingredient__name']}
            handleOnChange={props.setName}
            value={props.ingredient.name}
            setFocus={true}
            validationErrorMessage={props.validationErrorElements.name}
          />
        </div>
      </div>
      <div className={classes['add__to--list']}>
        <span className={classes['add__bg']} onClick={props.addIngredient}>
          <i className={addIngredientToListButtonClasses} />
        </span>
      </div>
    </div>
  );
};

AddIngredients.propTypes = {
  ingredient: PropTypes.object.isRequired,
  setName: PropTypes.func.isRequired,
  handleOnFileChange: PropTypes.func.isRequired,
  addIngredient: PropTypes.func.isRequired,
  validationErrorElements: PropTypes.object.isRequired,
  removeSelectedImage: PropTypes.func.isRequired
};

export default AddIngredients;
