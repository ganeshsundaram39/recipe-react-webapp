import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import classes from './Instructions.module.scss';
export default class Process extends Component {
  static propTypes = {};

  render() {
    return (
      <div className={classes.process}>
        <div className={classes['single__process']}>
          <span className={classes['count']}>1. </span>Take 2 cup of nachni
        </div>
        <div className={classes['actions']}>
          <button className={classes['add']}>
            <i class="fas fa-plus" />
          </button>
          <button className={classes['save']}>
            <i className="fas fa-save" />
          </button>
        </div>
      </div>
    );
  }
}
