import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class NewRecipe extends Component {
  static propTypes = {
    navigateTo: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  changeActiveWindow(windowName = 'Intro') {
    this.props.navigateTo(windowName);
  }

  render() {
    return <div />;
  }
}

export default NewRecipe;
