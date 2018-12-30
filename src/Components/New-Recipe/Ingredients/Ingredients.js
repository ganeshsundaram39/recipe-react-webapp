import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import classes from './Ingredients.module.scss';
import { Ui } from '../../Ui-Components/Ui-Components';
import DefaultBackground from '../../../assets/images/imageupload.svg';

export default class Ingredients extends Component {
  // static propTypes = {};
  constructor(props) {
    super(props);
    this.state = {
      ingredient: {
        name: '',
        image: DefaultBackground,
        size: '70% 70%'
      }
    };
  }
  setIngredientName(event) {
    // event.persist();
    const ingredientName = event.target.value;
    this.setState(prevState => {
      return { ingredient: { ...prevState.ingredient, name: ingredientName } };
    });
  }

  readURL(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = e => {
        this.setState(prevState => {
          return {
            ingredient: {
              ...prevState.ingredient,
              image: e.target.result,
              size: '100% 100%'
            }
          };
        });
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  }

  render() {
    const style = {
      ingredient__name: { width: '100%', fontSize: '1rem' },
      ingredientImage: {
        backgroundImage: `url(${this.state.ingredient.image})`,
        backgroundSize: this.state.ingredient.size
      }
    };
    return (
      <div className={classes.ingredients}>
        <div className={classes['add__ingredient']}>
          <div
            className={classes['upload__btn--wrapper']}
            style={style.ingredientImage}
          >
            <button className={classes['btn']}>
              <i className="fas fa-plus-circle" />
            </button>
            <input
              type="file"
              name="myfile"
              accept="image/*"
              onChange={this.readURL.bind(this)}
            />
          </div>
          <div className={classes['ingredient__name']}>
            <Ui.Input
              placeholder="Ingredient Name?"
              style={style['ingredient__name']}
              handleOnChange={this.setIngredientName.bind(this)}
              value={this.state.ingredient.name}
              setFocus={true}
            />
          </div>
        </div>
        <div className={classes['list__of--ingredients']} />
      </div>
    );
  }
}
