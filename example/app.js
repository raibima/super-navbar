import React from 'react';
import { render } from 'react-dom';

import Navbar from 'super-navbar';

const App = props => (
  <div>
    <Navbar>
      <a href="#" data-active>Home</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </Navbar>
  </div>
);

render(
  <App />,
  document.getElementById('app')
);