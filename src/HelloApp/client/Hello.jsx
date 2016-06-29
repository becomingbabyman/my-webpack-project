import React, { Component, PropTypes } from 'react';

export default class Hello extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  }

  render() {
    const { name } = this.props;

    return (
      <h1>Hello {name}</h1>
    );
  }
}
