import React from 'react';

import { Intro } from '../Intro/Intro';
export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showIntro: true };
  }
  render() {
    let display = null;
    if (this.state.showIntro) {
      display = <Intro />;
    } else {
      display = (
        <div className="container">
          <div>Header</div>
          <div>body</div>
        </div>
      );
    }
    return <>{display}</>;
  }
}
