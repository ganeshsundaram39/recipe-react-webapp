import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Process.module.scss';
export default class Process extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return <div className={classes.process}>Process</div>;
  }
}
