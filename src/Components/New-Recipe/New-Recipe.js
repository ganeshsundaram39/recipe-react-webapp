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
    console.log(windowName);
    this.props.navigateTo(windowName);
  }
  componentDidMount() {
    setTimeout(() => {
      this.showWrapper();
    }, 40);
  }

  showWrapper() {
    this.setState({
      showWrapper: true
    });
  }
  render() {
    const wrapperStyles = {
      height: this.state.showWrapper ? '85%' : '0%',
      width: '70%',
      padding: '2% 3%',
      flexWrap: 'wrap'
    };

    return (
      <div className={classes.new__recipe}>
        <Ui.BackgroundImage
          url={this.state.backgroundImage.url}
          name={this.state.backgroundImage.name}
          cssStyles={this.state.backgroundImage.cssStyles}
        />
        <Ui.Overlay />
        <Ui.Wrapper wrapperStyles={wrapperStyles}>
          <div className={classes.navigation}>
            <Ui.Button
              button__Type="dark__button"
              handleOnClick={this.changeActiveWindow.bind(this, 'Menu')}
            >
              Menu
            </Ui.Button>
          </div>
          <div className={classes['recipe__inputs']}>
            <input
              type="text"
              className={classes['recipe__name']}
              placeholder="Recipe Name"
              autoFocus
            />
          </div>
        </Ui.Wrapper>
      </div>
    );
  }
}
