import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import classes from './Ingredients.module.scss';
import DefaultBackground from '../../../assets/images/imageupload.svg';
import AddIngredients from './Add-Ingredients/Add-Ingredients';
import ListOfIngredients from './List-Of-Ingredients/List-Of-Ingredients';
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
    return (
      <div className={classes.ingredients}>
        <AddIngredients
          ingredient={this.state.ingredient}
          handleOnFileChange={this.readURL.bind(this)}
          setName={this.setIngredientName.bind(this)}
        />
        <ListOfIngredients />
      </div>
    );
  }
}
