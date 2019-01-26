import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './More-Info.module.scss';
import '../../../../node_modules/video-react/dist/video-react.css';
import { Player } from 'video-react';
import DefaultVideo from '../../../assets/videos/defaultvideo.mp4';
import { Ui } from '../../Ui-Components/Ui-Components';

import { withAlert } from 'react-alert';
class MoreInfo extends Component {
  static propTypes = {
    video: PropTypes.string.isRequired,
    saveVideo: PropTypes.func.isRequired,
    changeActiveTab: PropTypes.func.isRequired,
    recipeInfo: PropTypes.object.isRequired
  };
  state = { video: { data: DefaultVideo, size: { size: 6.9, unit: 'MB' } } };
  getFileSize(size) {
    const unit = ['Bytes', 'KB', 'MB', 'GB'];
    let i = 0;
    while (size > 900) {
      size /= 1024;
      i++;
    }
    return { size: Math.round(size * 100) / 100, unit: unit[i] };
  }
  readURL(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      var size = this.getFileSize(event.target.files[0].size);
      reader.onload = e => {
        if (Math.floor(size.size) < 20 && size.unit === 'MB') {
          const video = e.target.result;
          this.setState({
            video: {
              data: video,
              size: size.size,
              unit: size.unit
            }
          });
          this.props.saveVideo(video);
          this.props.alert.info('Recipe Video Uploaded!');
        } else {
          this.props.alert.info('Please Upload Video less than 20 MB!!');
        }
      };
      reader.readAsDataURL(event.target.files[0]);
      event.target.value = '';
    }
  }
  removeSelectedVideo = () => {
    this.setState({
      video: { data: DefaultVideo, size: { size: 6.9, unit: 'MB' } }
    });
    this.props.saveVideo(null);
    this.props.alert.info('Recipe Video Removed!');
  };
  saveRecipe() {
    {
      const prevRecipeWebappData = JSON.parse(
        localStorage.getItem('recipe-webapp-data')
      );
      if (prevRecipeWebappData) {
        const recipeWebappData = {
          ...prevRecipeWebappData,
          recipeInfo: [
            ...prevRecipeWebappData.recipeInfo,
            this.props.recipeInfo
          ]
        };
        localStorage.setItem(
          'recipe-webapp-data',
          JSON.stringify(recipeWebappData)
        );
        return;
      }
    }
    const recipeWebappData = {
      recipeInfo: [this.props.recipeInfo]
    };
    localStorage.setItem(
      'recipe-webapp-data',
      JSON.stringify(recipeWebappData)
    );
  }
  changeActiveTab(tabName = 'Basic Info') {
    this.props.changeActiveTab(tabName);
  }
  componentDidMount() {
    if (this.props.video !== null) {
      this.setState({ video: this.props.video });
    }
  }
  render() {
    let removeSelectedButton =
      this.state.video.data !== DefaultVideo ? (
        <button
          title="Remove uploaded video"
          className={classes['btn']}
          onClick={this.removeSelectedVideo}
        >
          <i className="fas fa-minus" />
        </button>
      ) : null;
    return (
      <div className={classes['more__info']}>
        <div className={classes['upload__btn--wrapper']}>
          <button className={classes['btn']}>
            <i className="fas fa-plus" /> Upload Video
          </button>
          <input
            type="file"
            name="myfile"
            accept="video/*"
            onChange={this.readURL.bind(this)}
          />
          {removeSelectedButton}
          <div className={classes['info']}>
            <i
              className="fas fa-info-circle"
              title="Please upload video of small size..!!"
            />
          </div>
        </div>
        <Player
          playsInline
          autoPlay={true}
          src={this.state.video.data}
          fluid={false}
          width={'100%'}
          height={'60%'}
        />
        <div className={classes['actions']}>
          <Ui.Button
            button__Type="light__button"
            handleOnClick={this.changeActiveTab.bind(this, 'Directions')}
          >
            Directions <i className="far fa-hand-point-left" />
          </Ui.Button>
          <Ui.Button
            button__Type="dark__button"
            handleOnClick={this.saveRecipe.bind(this)}
          >
            Save <i className="far fa-save" />
          </Ui.Button>
        </div>
      </div>
    );
  }
}
export default withAlert(MoreInfo);
