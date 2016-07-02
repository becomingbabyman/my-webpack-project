import React, { Component } from 'react';
import Hello from './Hello';
import AppBar from './AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class HelloApp extends Component {
  render() {
    // Simple ref example
    // NOTE: uncomment to see simple example
    // return (
    //   <div>
    //     <Hello name="Bob" ref="thisRefBreaksThings" />
    //   </div>
    // )

    // Complex Material-UI example
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
