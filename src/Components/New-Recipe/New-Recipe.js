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
      this.recipeName.focus();
      document.title = 'Recipe App | New Recipe';
    }, this.props.showTime);
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
      flexWrap: 'wrap',
      alignItems: 'center'
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
            <div className={classes['page__name']}>New Recipe</div>
            <Ui.Button
              button__Type="dark__button"
              handleOnClick={this.changeActiveWindow.bind(this, 'Main')}
            >
              Main <i className="far fa-compass" />
            </Ui.Button>
          </div>
          <div className={classes['recipe__inputs']}>
            <input
              ref={inp => {
                this.recipeName = inp;
              }}
              type="text"
              className={classes['recipe__title']}
              placeholder="Title?"
            />
            <input
              type="text"
              className={classes['recipe__writer']}
              placeholder="Writer?"
            />
          </div>
        </Ui.Wrapper>
      </div>
    );
  }
}
