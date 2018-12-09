import React from 'react';

import classes from './Intro.module.scss';
import { Ui } from '../Ui-Components/Ui-Components';
export class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showWrapper: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.showWrapper();
    }, 7000);
  }

  showWrapper() {
    this.setState({
      showWrapper: true
    });
  }

  render() {
    const wrapperStyles = { height: this.state.showWrapper ? '50%' : '0%' };
    return (
      <div className={classes.intro}>
        <img
          className={classes.background}
          src={require('../assests/images/vegetables.jpg')}
          alt="vegetables"
        />
        <Ui.Overlay />
        <div className={classes.wrapper} style={wrapperStyles}>
          <div className={classes.next__action}>
            <Ui.Button button__Type="dark__button">New Recipe</Ui.Button>
            <Ui.Button button__Type="light__button">Sign Up</Ui.Button>
          </div>
        </div>
        {this.state.showWrapper ? null : <Ui.LoadingScreen />}
      </div>
    );
  }
}
