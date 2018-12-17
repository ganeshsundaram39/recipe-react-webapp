import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Basic-Info.module.scss';

export default class BasicInfo extends Component {
  static propTypes = {
    setRecipeInfo: PropTypes.func.isRequired,
    recipeInfo: PropTypes.object.isRequired
  };
  setRecipeInfo(inputType, event) {
    this.props.setRecipeInfo(inputType, event.target.value);
  }
  render() {
    return (
      <div className={classes['recipe__basic']}>
        <input
          autoFocus
          type="text"
          className={classes['recipe__title']}
          placeholder="Title?"
          onChange={this.setRecipeInfo.bind(this, 'title')}
          value={this.props.recipeInfo.title}
        />
        <input
          type="text"
          className={classes['recipe__writer']}
          placeholder="Writer?"
          onChange={this.setRecipeInfo.bind(this, 'writer')}
          value={this.props.recipeInfo.writer}
        />
      </div>
    );
  }
}
