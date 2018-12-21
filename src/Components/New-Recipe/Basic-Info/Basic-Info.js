import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Basic-Info.module.scss';
import { Ui } from '../../Ui-Components/Ui-Components';

export default class BasicInfo extends Component {
  static propTypes = {
    setRecipeInfo: PropTypes.func.isRequired,
    recipeInfo: PropTypes.object.isRequired
  };
  setRecipeInfo(inputType, event) {
    this.props.setRecipeInfo(inputType, event.target.value);
  }
  render() {
    const titleStyle = {
      width: '60%',
      fontSize: '1.2rem',
      fontWeight: 600
    };
    const writerStyle = {
      width: '40%',
      fontSize: '1.2rem',
      fontWeight: 600
    };
    return (
      <div className={classes['recipe__basic']}>
        <Ui.Input
          placeholder="Title?"
          style={titleStyle}
          handleOnChange={this.setRecipeInfo.bind(this, 'title')}
          value={this.props.recipeInfo.title}
          hasAutoFocus="true"
        />
        <Ui.Input
          placeholder="Writer?"
          style={writerStyle}
          handleOnChange={this.setRecipeInfo.bind(this, 'writer')}
          value={this.props.recipeInfo.writer}
          hasAutoFocus="false"
        />
      </div>
    );
  }
}
