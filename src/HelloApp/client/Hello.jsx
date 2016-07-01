import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import React, { Component, PropTypes } from 'react';
import { Stuff } from 'collections';

class Hello extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  }

  render() {
    const { name, stuff } = this.props;

    return (
      <div>
        <h1>Hello {name}</h1>
        <p>stuff: {stuff && stuff.name} {stuff && stuff.type}</p>
      </div>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('stuff');
  return {
    stuff: Stuff.findOne(),
  };
}, Hello);
