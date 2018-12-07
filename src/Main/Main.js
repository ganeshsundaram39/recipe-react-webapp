import React from 'react';

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showIntro: false };
  }
  render() {
    let display = null;
    if (this.state.showIntro) {
      display = <div className="intro">Intro</div>;
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
