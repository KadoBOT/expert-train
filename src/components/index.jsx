import React from 'react';
import { Link, Route } from 'react-router-dom';
import styled from 'styled-components';
import { selection } from 'polished';

import routes from './routes';

const Div = styled.div`
  ${selection({ background: 'lavender' }, '*')}
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
