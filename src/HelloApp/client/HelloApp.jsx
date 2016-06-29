import React, { Component } from 'react';
import Hello from './Hello';
import AppBar from './AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class HelloApp extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar />
          <Hello name="Bob" />
        </div>
      </MuiThemeProvider>
    )
  }
}
