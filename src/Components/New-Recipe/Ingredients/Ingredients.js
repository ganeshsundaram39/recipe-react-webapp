import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Ingredients.module.scss';
import DefaultBackground from '../../../assets/images/imageupload.svg';
import AddIngredients from './Add-Ingredients/Add-Ingredients';
import ListOfIngredients from './List-Of-Ingredients/List-Of-Ingredients';
import { Ui } from '../../Ui-Components/Ui-Components';
import { withAlert } from 'react-alert';
class Ingredients extends Component {
  static propTypes = {
    addIngredient: PropTypes.func.isRequired,
    ingredients: PropTypes.array.isRequired,
    removeIngredient: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      ingredient: { name: '', image: DefaultBackground, size: '70% 70%' },
      validationErrorMessage: { name: false, image: false, addToList: false }
    };
  }
  changeActiveTab(tabName = 'Basic Info') {
    if (tabName === 'Directions') {
      if (this.props.ingredients.length <= 0) {
        this.setState({
          validationErrorMessage: { name: false, image: false, addToList: true }
        });

        this.props.alert.info('No Ingredients for Recipe?');
        setTimeout(() => {
          this.setState({
            validationErrorMessage: {
              name: false,
              image: false,
              addToList: false
            }
          });
        }, 100);
        return;
      }
    }
    this.props.changeActiveTab(tabName);
  }
  setIngredientName(event) {
    const ingredientName = event.target.value;
    this.setState(prevState => {
      return { ingredient: { ...prevState.ingredient, name: ingredientName } };
    });
  }
  removeSelectedImage = () => {
    this.setState(prevState => {
      return {
        ingredient: {
          ...prevState.ingredient,
          image: DefaultBackground,
          size: '70% 70%'
        }
      };
    });
  };
  addIngredient = () => {
    const { name, image } = this.state.ingredient;
    if (name !== '' && image !== DefaultBackground) {
      this.props.addIngredient({ name, image });
      this.setState({
        ingredient: {
          name: '',
          image: DefaultBackground,
          size: '70% 70%'
        }
      });
    } else {
      let element = null;
      switch (true) {
        case name === '' && image === DefaultBackground:
          element = { name: true, image: true, addToList: false };
          break;
        case name === '':
          element = { name: true, image: false, addToList: false };
          break;
        case image === DefaultBackground:
          element = { name: false, image: true, addToList: false };
          break;
        default:
          break;
      }

      this.props.alert.info('Image and Name for Ingredient!');
      this.setState({ validationErrorMessage: element });
      setTimeout(() => {
        this.setState({
          validationErrorMessage: {
            name: false,
            image: false,
            addToList: false
          }
        });
      }, 100);
    }
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

      event.target.value = '';
    }
  }
  removeIngredient = ingredientName => {
    this.props.removeIngredient(ingredientName);
  };
  render() {
    return (
      <div className={classes.ingredients}>
        <AddIngredients
          ingredient={this.state.ingredient}
          removeSelectedImage={this.removeSelectedImage}
          handleOnFileChange={this.readURL.bind(this)}
          setName={this.setIngredientName.bind(this)}
          addIngredient={this.addIngredient.bind(this)}
          validationErrorElements={this.state.validationErrorMessage}
        />
        <ListOfIngredients
          ingredients={this.props.ingredients}
          removeIngredient={this.removeIngredient}
        />
        <div className={classes['actions']}>
          <Ui.Button
            button__Type="light__button"
            handleOnClick={this.changeActiveTab.bind(this, 'Basic Info')}
          >
            Basic Info <i className="far fa-hand-point-left" />
          </Ui.Button>
          <Ui.Button
            button__Type="dark__button"
            handleOnClick={this.changeActiveTab.bind(this, 'Directions')}
          >
            Directions <i className="far fa-hand-point-right" />
          </Ui.Button>
        </div>
      </div>
    );
  }
}

export default withAlert(Ingredients);
