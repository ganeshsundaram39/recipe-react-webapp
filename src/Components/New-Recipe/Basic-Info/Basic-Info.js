import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Basic-Info.module.scss';
import { Ui } from '../../Ui-Components/Ui-Components';
var uniqid = require('uniqid');
export default class BasicInfo extends Component {
  static propTypes = {
    setRecipeInfo: PropTypes.func.isRequired,
    recipeInfo: PropTypes.object.isRequired,
    setTagsForRecipe: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);
    this.state = { tag: '' };
    this.enterIcon = React.createRef();
  }
  setRecipeInfo(inputType, event) {
    this.props.setRecipeInfo(inputType, event.target.value);
  }
  handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.props.setTagsForRecipe(this.state.tag);
      this.setState({ tag: '' });
    }
  };
  setTagForRecipe = event => {
    this.setState({ tag: event.target.value });
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (
      this.props.recipeInfo.tags.length !== prevProps.recipeInfo.tags.length
    ) {
      this.enterIcon.current.style.transform =
        'rotate(90deg) translateY(-15px) translateX(4px)';
      setTimeout(() => {
        this.enterIcon.current.style.transform =
          'rotate(90deg) translateY(-15px)';
      }, 200);
    }
  };
  render() {
    const style = {
      titleStyle: { width: '60%' },
      writerStyle: { width: '40%' },
      tagsStyle: { width: '40%' }
    };
    const tags = this.props.recipeInfo.tags.map(tag => (
      <span className={classes['tag']} key={uniqid()}>
        <i className="fas fa-hashtag" />
        {tag}
      </span>
    ));
    const tagsBackground =
      this.props.recipeInfo.tags.length > 0
        ? { background: 'rgba(0, 0, 0, 0.8)' }
        : { background: 'transparent' };
    return (
      <div className={classes['recipe__basic']}>
        <div className={classes['input__wrapper']}>
          <Ui.Input
            placeholder="Title?"
            style={style.titleStyle}
            handleOnChange={this.setRecipeInfo.bind(this, 'title')}
            value={this.props.recipeInfo.title}
            setFocus={true}
          />
          <Ui.Input
            placeholder="Writer?"
            style={style.writerStyle}
            handleOnChange={this.setRecipeInfo.bind(this, 'writer')}
            value={this.props.recipeInfo.writer}
            setFocus={false}
          />
          <Ui.Input
            placeholder="Tags?"
            style={style.tagsStyle}
            onKeyPress={this.handleKeyPress}
            handleOnChange={this.setTagForRecipe}
            value={this.state.tag}
            setFocus={false}
          />
          <div className={classes['press__Enter']}>
            <i className="fas fa-level-down-alt" ref={this.enterIcon} />
          </div>
        </div>
        <div className={classes['tags']} style={tagsBackground}>
          {tags}
        </div>
      </div>
    );
  }
}
