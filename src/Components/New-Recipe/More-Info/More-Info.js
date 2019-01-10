import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import classes from './More-Info.module.scss';
import '../../../../node_modules/video-react/dist/video-react.css';
import { Player } from 'video-react';

export default class MoreInfo extends Component {
  // static propTypes = {};
  state = {
    video: { src: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4' }
  };

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
  render() {
    return (
      <div className={classes['more__info']}>
        <input
          type="file"
          name="myfile"
          accept="video/*"
          onChange={this.readURL.bind(this)}
        />
        <Player
          playsInline
          src={this.state.video.src}
          fluid={false}
          width={'100%'}
          height={'80%'}
        />
      </div>
    );
  }
}
