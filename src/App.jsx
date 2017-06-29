import React from 'react';
import { compose as recompose, onlyUpdateForKeys, withHandlers, withState } from 'recompose';
import { inc } from 'ramda';

import logo from './logo.svg';
import './App.css';

const enhance = recompose(
  withState('component', 'setComponent', false),
  withState('dontUpdate', 'setUpdater', 0),
  withHandlers({
    handleClick: ({ setComponent }) => async (ev) => {
      ev.preventDefault();
      const { Test } = await import('./Text');
      setComponent(n => (
        n ? false : Test
      ));
    },
    handleClick2: ({ setUpdater }) => (ev) => {
      ev.preventDefault();
      setUpdater(inc);
    },
  }),
  onlyUpdateForKeys(['component']),
);

const App = enhance(({ handleClick, handleClick2, component, dontUpdate }) => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
      <button onClick={handleClick}>Update state and component</button>
      <button onClick={handleClick2}>Update state only</button>
    </div>
    <p className="App-intro">
      Component will be updated only if the specific state key changes
    </p>
    {component}
    <p>{dontUpdate}</p>
  </div>
));

export default App;
