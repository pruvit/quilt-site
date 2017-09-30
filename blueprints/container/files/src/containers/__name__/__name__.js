import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { firebaseConnect, pathToJS, dataToJS } from 'react-redux-firebase';
import <%= pascalEntityName %> from '../components/<%= pascalEntityName %>';

// List of Firbase refs to sync
@firebaseConnect([

])
@connect(
  // Map state to props
  ({ firebase }) => ({
    auth: pathToJS(firebase, 'auth'),
    <%= pascalEntityName %>: dataToJS(firebase, '<%= pascalEntityName %>'),
  })
)
export default class <%= pascalEntityName %>Container extends Component {
  static propTypes = {
    auth: PropTypes.object,
    <%= pascalEntityName %>: PropTypes.object,
  }

  render() {
    return (
      <<%= pascalEntityName %> />
    );
  }
}
