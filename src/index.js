// create a new component
// should produce html

// component should be put into the DOM somehow

import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return <div>Hi!</div>;
}

ReactDOM.render(
  < App />, document.querySelector('.container')
);
