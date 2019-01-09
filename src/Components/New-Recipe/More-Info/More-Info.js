import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import classes from './More-Info.module.scss';
export default class MoreInfo extends Component {
  // static propTypes = {};
  state = {
    video: {
      src: ''
    }
  };

  readURL(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = e => {
        console.log(e.target.result);
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

        <video width="320" height="240" controls>
          <source src={this.state.video.src} type="video/mp4" />
        </video>
      </div>
    );
  }
}
