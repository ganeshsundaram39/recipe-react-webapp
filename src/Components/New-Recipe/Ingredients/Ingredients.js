import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Ingredients.module.scss';
import DefaultBackground from '../../../assets/images/imageupload.svg';
import AddIngredients from './Add-Ingredients/Add-Ingredients';
import ListOfIngredients from './List-Of-Ingredients/List-Of-Ingredients';

export default class Ingredients extends Component {
  static propTypes = {
    addIngredient: PropTypes.func.isRequired,
    ingredients: PropTypes.array.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      ingredient: { name: '', image: DefaultBackground, size: '70% 70%' }
    };
  }
  setIngredientName(event) {
    const ingredientName = event.target.value;
    this.setState(prevState => {
      return { ingredient: { ...prevState.ingredient, name: ingredientName } };
    });
  }
  addIngredient = () => {
    const { name, image } = this.state.ingredient;
    this.props.addIngredient({ name, image });
    this.setState({
      ingredient: {
        name: '',
        image: DefaultBackground,
        size: '70% 70%'
      }
    });
  };
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
          addIngredient={this.addIngredient.bind(this)}
        />
        <ListOfIngredients ingredients={this.props.ingredients} />
      </div>
    );
  }
}
