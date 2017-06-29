import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import App from './App';
import Bundle from './routes/Bundle';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const Example = props => <Bundle load={() => import('./modules/Example')} {...props} />;

const Main = () => (
  <Router>
    <div>
      <Link to="/">Home</Link>
      {' '}
      <Link to="/example">Example</Link>
      <hr />
      <Route exact path="/" component={App} />
      <Route path="/example" component={Example} />
    </div>
  </Router>
);

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
