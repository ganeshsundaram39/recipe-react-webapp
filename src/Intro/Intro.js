import React from 'react';

import classes from './Intro.module.scss';
export class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showWrapper: false
    };
    this.wrapperClasses = [classes.wrapper];
  }

  componentDidMount() {
    setTimeout(() => this.showWrapper(), 500);
  }
  //   componentWillUnmount() {
  //     this.wrapperClasses.push(classes.hide__wrapper);
  //   }
  showWrapper() {
    this.setState({
      showWrapper: true
    });
  }

  render() {
    if (this.state.showWrapper) {
      this.wrapperClasses.push(classes.show__wrapper);
    }
    return (
      <div className={classes.intro}>
        <div className={this.wrapperClasses.join(' ')} />
      </div>
    );
  }
}
