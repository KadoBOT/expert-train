import React from 'react';
import { Link, Route } from 'react-router-dom';
import routes from './routes';

const App = () => (
  <div>
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
  </div>
);

export default App;
