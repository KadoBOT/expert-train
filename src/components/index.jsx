import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import { selection } from 'polished';

import Link from '../commons/Link';
import routes from './routes';

const Div = styled.div`
  ${selection({
    color: '#5e5eb5',
    background: 'lavender',
  }, '*')}
  font-family: 'Rubik', sans-serif;
`;

const App = () => (
  <Div>
    <Link to="/">Home</Link>
    {' '}
    <Link to="/example">Example</Link>
    <hr />
    {routes.map(r => (
      <Route
        active
        component={r.component}
        exact={r.exact}
        key={r.path}
        path={r.path}
      />
    ))}
  </Div>
);

export default App;
