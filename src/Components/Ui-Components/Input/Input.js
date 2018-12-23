import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Input.module.scss';

export default class Input extends Component {
  static propTypes = {
    placeholder: PropTypes.string.isRequired,
    style: PropTypes.object.isRequired,
    handleOnChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    setFocus: PropTypes.bool.isRequired,
    onKeyPress: PropTypes.func
  };
  constructor(props) {
    super(props);
    this.inputElement = React.createRef();
  }
  componentDidMount() {
    if (this.props.setFocus) {
      this.inputElement.current.focus();
    }
  }
  render() {
    return (
      <>
        <input
          ref={this.inputElement}
          type="text"
          style={this.props.style}
          className={classes['input']}
          placeholder={this.props.placeholder}
          onChange={this.props.handleOnChange}
          value={this.props.value}
          onKeyPress={this.props.onKeyPress && this.props.onKeyPress}
        />
      </>
    );
  }
}
