import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Directions.module.scss';
import Direction from './Direction/Direction';
import Actions from './Actions/Actions';

var uniqid = require('uniqid');
export default class Directions extends Component {
  static propTypes = { setDirections: PropTypes.func.isRequired };
  state = {
    directions: [' ']
  };
  componentDidMount() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    this.el.scrollIntoView({ behavior: 'smooth' });
  }
  newDirection = () => {
    if (this.state.directions[this.state.directions.length - 1] !== ' ') {
      this.setState(prevState => {
        return {
          directions: [...prevState.directions, ' ']
        };
      });
      this.scrollToBottom();
    }
  };
  saveDirections = () => {
    if (this.state.directions.length) {
      this.props.setDirections(this.state.directions);
    }
  };
  editDirection(index, event) {
    const direction = event.target.value;
    this.setState(prevState => {
      const directions = [...prevState.directions];
      directions[index] = direction;
      return { directions: directions };
    });
  }

  render() {
    const directions = this.state.directions.map((direction, index) => (
      <Direction
        directionName={direction}
        editDirection={this.editDirection.bind(this, index)}
        index={index + 1}
        key={uniqid()}
      />
    ));
    return (
      <div
        className={classes.process}
        ref={el => {
          this.el = el;
        }}
      >
        {directions}
        <Actions
          newDirection={this.newDirection}
          saveDirections={this.saveDirections}
        />
      </div>
    );
  }
}
