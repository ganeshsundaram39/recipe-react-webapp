import React from 'react';
import PropTypes from 'prop-types';

import classes from './Actions.module.scss';
function Actions(props) {
  return (
    <>
      <div className={classes['actions']}>
        <button className={classes['new']} onClick={props.newDirection}>
          <i className="fas fa-plus" />
        </button>
        <button className={classes['save']} onClick={props.saveDirections}>
          <i className="fas fa-save" />
        </button>
      </div>
    </>
  );
}

Actions.propTypes = {
  newDirection: PropTypes.func.isRequired,
  saveDirections: PropTypes.func.isRequired
};

export default Actions;
