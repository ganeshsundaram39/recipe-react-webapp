// import React from 'react';
// import PropTypes from 'prop-types';

// import { Ui } from '../Ui-Components/Ui-Components';
// function ChangeTabs(props) {
//   const tabs = ['Basic Info', 'Ingredients', 'Process', 'More Info'];
//   const tabIndex = tabs.findIndex(tab => tab === props.currentTab);
//   let buttons = null;
//   switch (tabIndex) {
//     case tabIndex === 0:
//       buttons = (
//         <Ui.Button
//           button__Type="dark__button"
//           handleOnClick={this.changeActiveWindow.bind(this, 'Main')}
//         >
//           Ingredients <i class="far fa-hand-point-right" />
//         </Ui.Button>
//       );
//       break;
//     default:
//       break;
//   }
//   return <>{buttons}</>;
// }

// ChangeTabs.propTypes = {
//   currentTab: PropTypes.string.isRequired
// };

// export default ChangeTabs;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ChangeTabs extends Component {
  static propTypes = {
    currentTab: PropTypes.string.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      tabs: ['Basic Info', 'Ingredients', 'Process', 'More Info']
    };
  }
  shouldComponentUpdate(nextState, nextProps) {}

  render() {
    return <div />;
  }
}
