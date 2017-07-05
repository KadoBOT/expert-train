import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose as recompose, onlyUpdateForKeys,
withHandlers, withState } from 'recompose';

import selector from './selector';
import * as actions from './actions';

const mapStateToProps = state => ({ home: selector(state) });

const mapDispatchToProps = dispatch => bindActionCreators({
  increment: () => actions.increment(),
  decrement: () => actions.decrement(),
  incrementAsync: () => actions.incrementAsync(),
  incrementIfOdd: () => actions.incrementIfOdd(),
}, dispatch);

const enhance = recompose(
  connect(mapStateToProps, mapDispatchToProps),
  withState('component', 'setComponent', false),
  withHandlers({
    handleClick: ({ setComponent }) => async (ev) => {
      ev.preventDefault();
      const { Test } = await import(/* webpackChunkName: 'Test' */ '../Text');
      setComponent(n => (
        n ? false : <Test />
      ));
    },
  }),
  onlyUpdateForKeys(['component', 'home']),
);

const Home = enhance(({
  handleClick,
  decrement,
  increment,
  incrementAsync,
  incrementIfOdd,
  component,
  home,
}) => (
  <div>
    <div>
      <h2>Welcome to React</h2>
      <button onClick={handleClick}>Import Component after Click!</button>
      <button onClick={increment}>INCREMENT</button>
      <button onClick={decrement}>DECREMENT</button>
      <button onClick={incrementAsync}>ASYNC</button>
      <button onClick={incrementIfOdd}>IF ODD</button>
    </div>
    <p>
      check your network tab to see component file being loaded only after
      the click.
    </p>
    {component}
    <p>{home}</p>
  </div>
));

export default Home;
