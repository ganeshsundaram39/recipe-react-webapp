import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import classes from './More-Info.module.scss';
import '../../../../node_modules/video-react/dist/video-react.css';
import { Player } from 'video-react';
import DefaultVideo from '../../../assets/videos/defaultvideo.mp4';
export default class MoreInfo extends Component {
  // static propTypes = {};
  state = { video: { src: DefaultVideo } };

  readURL(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = e => {
        this.setState({
          video: {
            src: e.target.result
          }
        });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  removeSelectedVideo = () => {
    this.setState({
      video: { src: DefaultVideo }
    });
  };
  render() {
    let removeSelectedButton =
      this.state.video.src !== DefaultVideo ? (
        <button className={classes['btn']} onClick={this.removeSelectedVideo}>
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
          src={this.state.video.src}
          fluid={false}
          width={'100%'}
          height={'80%'}
        />
      </div>
    );
  }
}
