import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Ui } from '../../Ui-Components/Ui-Components';

export default class ChangeTabs extends Component {
  static propTypes = {
    currentTab: PropTypes.string.isRequired,
    changeActiveTab: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);
    this.tabs = ['Basic Info', 'Ingredients', 'Process', 'More Info'];
  }

  changeActiveTab(currentTab) {
    this.props.changeActiveTab(currentTab);
  }
  render() {
    const tabIndex = this.tabs.findIndex(tab => tab === this.props.currentTab);
    let buttons = null;

    switch (true) {
      case tabIndex === 0:
        buttons = (
          <Ui.Button
            button__Type="dark__button"
            handleOnClick={this.changeActiveTab.bind(this, 'Ingredients')}
          >
            Ingredients <i className="far fa-hand-point-right" />
          </Ui.Button>
        );
        break;
      case tabIndex > 0 && tabIndex < this.tabs.length - 1:
        buttons = (
          <>
            <Ui.Button
              button__Type="light__button"
              handleOnClick={this.changeActiveTab.bind(
                this,
                this.tabs[tabIndex - 1]
              )}
            >
              {this.tabs[tabIndex - 1]} <i className="far fa-hand-point-left" />
            </Ui.Button>
            <Ui.Button
              button__Type="dark__button"
              handleOnClick={this.changeActiveTab.bind(
                this,
                this.tabs[tabIndex + 1]
              )}
            >
              {this.tabs[tabIndex + 1]}{' '}
              <i className="far fa-hand-point-right" />
            </Ui.Button>
          </>
        );
        break;
      case tabIndex === this.tabs.length - 1:
        buttons = (
          <>
            <Ui.Button
              button__Type="light__button"
              handleOnClick={this.changeActiveTab.bind(
                this,
                this.tabs[tabIndex - 1]
              )}
            >
              {this.tabs[tabIndex - 1]} <i className="far fa-hand-point-left" />
            </Ui.Button>
            <Ui.Button
              button__Type="dark__button"
              handleOnClick={this.changeActiveTab.bind(
                this,
                this.tabs[tabIndex]
              )}
            >
              Save <i className="far fa-save" />
            </Ui.Button>
          </>
        );
        break;
      default:
        console.error('Action not found //Change-Tabs.js');
        break;
    }
    return <>{buttons}</>;
  }
}
