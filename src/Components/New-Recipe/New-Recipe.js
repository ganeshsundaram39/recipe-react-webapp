import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './New-Recipe.module.scss';
import { Ui } from '../Ui-Components/Ui-Components';
export class NewRecipe extends Component {
  static propTypes = {
    navigateTo: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      backgroundImage: {
        name: 'fruits',
        url: 'fruits.jpeg',
        cssStyles: {}
      }
    };
  }
  changeActiveWindow(windowName = 'Intro') {
    this.props.navigateTo(windowName);
  }
  render() {
    return (
      <div className={classes.new__recipe}>
        <Ui.BackgroundImage
          url={this.state.backgroundImage.url}
          name={this.state.backgroundImage.name}
          cssStyles={this.state.backgroundImage.cssStyles}
        />
        <Ui.Overlay />
      </div>
    );
  }
}

export default NewRecipe;
