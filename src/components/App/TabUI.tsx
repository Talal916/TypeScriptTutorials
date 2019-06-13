import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export interface Props {
      currentTab: number;
      changeTabs(newValue: number): void;

}

export default class TabUI extends Component<Props> {
  render() {
    return (
      <Tabs
            indicatorColor='primary'
            textColor='primary'
            centered
            value={this.props.currentTab}
            onChange={(_,newValue) => this.props.changeTabs(newValue)
            }

            style={{ marginBottom: 10 }}
          >
            <Tab label='All' />
            <Tab label='Completed' />
            <Tab label='Pending' />
          </Tabs>
    );
  }
}