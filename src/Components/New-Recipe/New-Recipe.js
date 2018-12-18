import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './New-Recipe.module.scss';
import { Ui } from '../Ui-Components/Ui-Components';
import BasicInfo from './Basic-Info/Basic-Info';
import ChangeTabs from './Change-Tabs/Change-Tabs';
export class NewRecipe extends Component {
  static propTypes = {
    navigateTo: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      showWrapper: false,
      backgroundImage: {
        name: 'fruits',
        url: 'fruits.jpeg',
        cssStyles: {}
      },
      recipeInfo: {
        title: '',
        writer: '',
        imageUrl: ''
      },
      currentTab: 'Basic Info'
    };
  }
  changeActiveWindow(windowName = 'Intro') {
    this.props.navigateTo(windowName);
  }
  changeActiveTab(tabName = 'Basic Info') {
    this.currentTab = tabName;
  }
  componentDidMount() {
    setTimeout(() => {
      this.showWrapper();
      document.title = 'Recipe App | New Recipe';
    }, this.props.showTime);
  }
  setRecipeInfo = (inputType, inputValue) => {
    // One Approach
    // const recipeInfo = { ...this.state.recipeInfo };
    // recipeInfo[inputType] = inputValue;
    // this.setState({
    //   recipeInfo
    // });
    this.setState(prevState => {
      return {
        recipeInfo: { ...prevState.recipeInfo, [inputType]: inputValue }
      };
    });
  };
  showWrapper() {
    this.setState({
      showWrapper: true
    });
  }
  render() {
    const wrapperStyles = {
      height: this.state.showWrapper ? '85%' : '0%',
      width: '70%',
      padding: '2% 3%',
      flexWrap: 'wrap',
      alignItems: 'center'
    };
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
          <div className={classes['recipe__information']}>
            <BasicInfo
              recipeInfo={this.state.recipeInfo}
              setRecipeInfo={this.setRecipeInfo}
            />
            <div className={classes['actions']}>
              <ChangeTabs changeActiveTab={this.changeActiveTab.bind(this)} />
            </div>
          </div>
        </Ui.Wrapper>
      </div>
    );
  }
}
