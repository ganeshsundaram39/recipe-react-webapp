import React, { Component } from 'react';
import { Ui } from '../Ui-Components/Ui-Components';
import classes from './All-Recipes.module.scss';
import { AllRecipesSidebar } from './All-Recipes-Sidebar/All-Recipes-Sidebar';
import { RecipeDescription } from './Recipe-Description/Recipe-Description';
import { withAlert } from 'react-alert';

import PropTypes from 'prop-types';

class AllRecipes extends Component {
  static propTypes = {
    navigateTo: PropTypes.func.isRequired,
    showTime: PropTypes.number.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      showWrapper: false,
      backgroundImage: {
        name: 'cabbage',
        url:
          'https://res.cloudinary.com/gscode/image/upload/q_auto:low/v1563437893/cabbage.jpg',
        cssStyles: {}
      },
      recipeInfo: []
    };
  }
  changeActiveWindow(e, windowName = 'Main') {
    e.preventDefault();
    this.props.navigateTo(windowName);
  }
  showWrapper() {
    this.setState({ showWrapper: true });
  }
  deleteRecipe = id => {
    const { recipeInfo } = this.state;
    const updatedRecipe = {
      recipeInfo: recipeInfo.filter(recipe => recipe.id !== id)
    };
    this.setState(updatedRecipe);
    localStorage.setItem('recipe-webapp-data', JSON.stringify(updatedRecipe));
    this.props.alert.info('Recipe Deleted!');
  };

  componentDidMount() {
    const recipeWebappData = JSON.parse(
      localStorage.getItem('recipe-webapp-data')
    );
    if (
      recipeWebappData &&
      recipeWebappData.recipeInfo &&
      recipeWebappData.recipeInfo.length > 0
    ) {
      this.setState({
        showWrapper: true,
        recipeInfo: recipeWebappData.recipeInfo
      });
    }
    setTimeout(() => {
      this.showWrapper();
      document.title = 'Recipe App | All Recipes';
    }, this.props.showTime);
  }
  render() {
    const { recipeInfo } = this.state;
    const allRecipeTitles = recipeInfo.map(recipe => [recipe.id, recipe.title]);
    const wrapperStyles = {
      height: this.state.showWrapper ? '85%' : '0%',
      width: '70%',
      padding: '2% 3%',
      flexWrap: 'wrap',
      alignItems: 'center'
    };
    return (
      <div className={classes.all_recipes}>
        <Ui.BackgroundImage
          url={this.state.backgroundImage.url}
          name={this.state.backgroundImage.name}
          cssStyles={this.state.backgroundImage.cssStyles}
        />
        <Ui.Overlay />
        <Ui.Wrapper wrapperStyles={wrapperStyles}>
          <div className={classes.navigation}>
            <div className={classes['page__name']}>All Recipes</div>
            <Ui.Button
              button__Type="dark__button"
              handleOnClick={this.changeActiveWindow.bind(this)}
            >
              Main <i className="far fa-compass" />
            </Ui.Button>
          </div>
          <div className={classes['all-recipes__wrapper']}>
            <AllRecipesSidebar
              allRecipeTitles={allRecipeTitles}
              deleteRecipe={this.deleteRecipe}
            />
            <RecipeDescription />
          </div>
        </Ui.Wrapper>
      </div>
    );
  }
}

export default withAlert(AllRecipes);
