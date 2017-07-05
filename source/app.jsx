'use strict';

import React from 'react';
import { render } from 'react-dom';

const App = React.createClass({
  render() {
    return (
      <section>
        <h1>My scaffold</h1>
        <p>Hello World</p>
      </section>
    );
  }
});

render(
  <App />,
  document.getElementById('container')
);
