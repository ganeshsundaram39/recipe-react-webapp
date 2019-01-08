import React from 'react';
import PropTypes from 'prop-types';
import { Ui } from '../../../Ui-Components/Ui-Components';

import classes from './Direction.module.scss';

const Direction = props => {
  return (
    <div className={classes['single__process']}>
      <div className={classes['count']}>{props.index}. </div>
      <Ui.Input
        placeholder="Take 2 cup of ..."
        style={{ width: '90%' }}
        handleOnChange={props.editDirection}
        value={props.directionName.trim()}
        setFocus={true}
        validationErrorMessage={false}
      />
    </div>
  );
};

Direction.propTypes = {
  directionName: PropTypes.string.isRequired,
  editDirection: PropTypes.func.isRequired
};

export default Direction;
