import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './New-Recipe.module.scss';
import { Ui } from '../Ui-Components/Ui-Components';
export class NewRecipe extends Component {
  static propTypes = {
    navigateTo: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      showWrapper: false,
      backgroundImage: {
        name: 'fruits',
        url: 'fruits.jpeg',
        cssStyles: {}
      }
    };
  }
  changeActiveWindow(windowName = 'Intro') {
    this.props.navigateTo(windowName);
  }
  componentDidMount() {
    setTimeout(() => {
      this.showWrapper();
    }, 500); //7000
  }

  showWrapper() {
    this.setState({
      showWrapper: true
    });
  }
  render() {
    const wrapperDimensions = {
      height: this.state.showWrapper ? '80%' : '0%',
      width: '80%'
    };

    return (
      <div className={classes.new__recipe}>
        <Ui.BackgroundImage
          url={this.state.backgroundImage.url}
          name={this.state.backgroundImage.name}
          cssStyles={this.state.backgroundImage.cssStyles}
        />
        <Ui.Overlay />
        <Ui.Wrapper dimensions={wrapperDimensions} />
      </div>
    );
  }
}

export default NewRecipe;
