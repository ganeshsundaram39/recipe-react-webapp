import React, { Component } from 'react';
import classes from './Recipe-Description.module.scss';

export class RecipeDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div className={classes['recipe__description']} />;
  }
}
