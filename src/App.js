import React, { Component } from 'react';
import { compose, setPropTypes } from 'recompose';
import PropTypes from 'prop-types';

const Comp = compose(
  setPropTypes({
    text: PropTypes.string.isRequired,
  })
)(({
  text
}) =>
  <div>{text}</div>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Comp
          text="Test"
        />
        <Comp

        />
      </div>
    );
  }
}

export default App;
