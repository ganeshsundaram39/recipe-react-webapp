import React from 'react';
import PropTypes from 'prop-types';
import classes from './Intro.module.scss';
import { Ui } from '../Ui-Components/Ui-Components';
export class Intro extends React.Component {
  static propTypes = {
    navigateTo: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      showWrapper: false,
      backgroundImage: {
        name: 'vegetables',
        url:
          'https://res.cloudinary.com/gscode/image/upload/q_auto:low/v1563437898/vegetables.jpg',
        cssStyles: {}
      }
    };
  }

  componentDidMount() {
    setTimeout(() => {
      document.title = 'Recipe App';
      this.showWrapper();
    }, this.props.showTime);
  }

  showWrapper() {
    this.setState({
      showWrapper: true
    });
  }

  changeActiveWindow(windowName = 'Intro') {
    this.props.navigateTo(windowName);
  }

  render() {
    const wrapperStyles = {
      height: this.state.showWrapper ? '50%' : '0%',
      width: '50%',
      alignItems: 'center'
    };
    return (
      <div className={classes.intro}>
        <Ui.BackgroundImage
          url={this.state.backgroundImage.url}
          name={this.state.backgroundImage.name}
          cssStyles={this.state.backgroundImage.cssStyles}
        />
        <Ui.Overlay />
        <Ui.Wrapper wrapperStyles={wrapperStyles}>
          <div className={classes.next__action}>
            <Ui.Button
              button__Type="dark__button"
              handleOnClick={this.changeActiveWindow.bind(this, 'New-Recipe')}
            >
              New Recipe
            </Ui.Button>
            <Ui.Button
              button__Type="light__button"
              handleOnClick={this.changeActiveWindow.bind(this, 'All-Recipes')}
            >
              All Recipes
            </Ui.Button>
          </div>
        </Ui.Wrapper>
        {this.state.showWrapper || this.props.activeWindow === 'Menu' ? null : (
          <Ui.LoadingScreen />
        )}
      </div>
    );
  }
}
