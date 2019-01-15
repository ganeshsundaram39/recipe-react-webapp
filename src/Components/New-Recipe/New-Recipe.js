import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './New-Recipe.module.scss';
import { Ui } from '../Ui-Components/Ui-Components';
import BasicInfo from './Basic-Info/Basic-Info';
import Ingredients from './Ingredients/Ingredients';
import Directions from './Directions/Directions';
import MoreInfo from './More-Info/More-Info';

export class NewRecipe extends Component {
  static propTypes = {
    navigateTo: PropTypes.func.isRequired,
    showTime: PropTypes.number.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      showWrapper: false,
      backgroundImage: { name: 'fruits', url: 'fruits.jpeg', cssStyles: {} },
      recipeInfo: {
        title: '',
        writer: '',
        imageUrl: '',
        tags: [],
        ingredients: [],
        directions: []
      },
      currentTab: 'Basic Info'
    };
  }
  changeActiveWindow(windowName = 'Intro') {
    this.props.navigateTo(windowName);
  }
  changeActiveTab(tabName = 'Basic Info') {
    this.setState({ currentTab: tabName });
  }
  addIngredient = ingredient => {
    this.setState(prevState => {
      return {
        recipeInfo: {
          ...prevState.recipeInfo,
          ingredients: [...prevState.recipeInfo.ingredients, ingredient]
        }
      };
    });
  };
  setRecipeInfo = (inputType, inputValue) => {
    this.setState(prevState => {
      return {
        recipeInfo: { ...prevState.recipeInfo, [inputType]: inputValue }
      };
    });
  };
  setTagsForRecipe = tag => {
    if (tag.trim() && !this.state.recipeInfo.tags.includes(tag)) {
      this.setState(prevState => {
        return {
          recipeInfo: {
            ...prevState.recipeInfo,
            tags: [...prevState.recipeInfo.tags, tag]
          }
        };
      });
    }
  };
  removeTag = tag => {
    this.setState(prevState => {
      return {
        recipeInfo: {
          ...prevState.recipeInfo,
          tags: prevState.recipeInfo.tags.filter(t => t !== tag)
        }
      };
    });
  };
  showWrapper() {
    this.setState({ showWrapper: true });
  }
  setDirections = directions => {
    const savedDirections = [...directions];
    this.setState(prevState => {
      return {
        recipeInfo: { ...prevState.recipeInfo, directions: savedDirections }
      };
    });
  };
  componentDidMount() {
    setTimeout(() => {
      this.showWrapper();
      document.title = 'Recipe App | New Recipe';
    }, this.props.showTime);
  }
  render() {
    const wrapperStyles = {
      height: this.state.showWrapper ? '85%' : '0%',
      width: '70%',
      padding: '2% 3%',
      flexWrap: 'wrap',
      alignItems: 'center'
    };
    let currentTabJsx = null;

    switch (this.state.currentTab) {
      case 'Basic Info':
        currentTabJsx = (
          <BasicInfo
            recipeInfo={this.state.recipeInfo}
            setRecipeInfo={this.setRecipeInfo}
            setTagsForRecipe={this.setTagsForRecipe}
            removeTag={this.removeTag}
            changeActiveTab={this.changeActiveTab.bind(this)}
          />
        );
        break;
      case 'Ingredients':
        currentTabJsx = (
          <Ingredients
            addIngredient={this.addIngredient}
            ingredients={[...this.state.recipeInfo.ingredients]}
            changeActiveTab={this.changeActiveTab.bind(this)}
          />
        );
        break;
      case 'Directions':
        currentTabJsx = (
          <Directions
            setDirections={this.setDirections}
            changeActiveTab={this.changeActiveTab.bind(this)}
          />
        );
        break;
      case 'More Info':
        currentTabJsx = (
          <MoreInfo changeActiveTab={this.changeActiveTab.bind(this)} />
        );
        break;
      default:
        console.error('Tab not found');
        break;
    }
    return (
      <div className={classes.new__recipe}>
        <Ui.BackgroundImage
          url={this.state.backgroundImage.url}
          name={this.state.backgroundImage.name}
          cssStyles={this.state.backgroundImage.cssStyles}
        />
        <Ui.Overlay />
        <Ui.Wrapper wrapperStyles={wrapperStyles}>
          <div className={classes.navigation}>
            <div className={classes['page__name']}>New Recipe</div>
            <Ui.Button
              button__Type="dark__button"
              handleOnClick={this.changeActiveWindow.bind(this, 'Main')}
            >
              Main <i className="far fa-compass" />
            </Ui.Button>
          </div>
          <div className={classes['recipe__information']}>{currentTabJsx}</div>
        </Ui.Wrapper>
      </div>
    );
  }
}
