import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';
import App from './components/';
import configureStore from './store';
import DevTools from './utils/DevTools';
import rootSaga from './components/sagas';

const store = configureStore(window.__INITIAL_STATE__); // eslint-disable-line
store.runSaga(rootSaga);

const Main = () => (
  <Provider store={store}>
    <div>
      <Router>
        <App />
      </Router>
      {process.env.NODE_ENV !== 'production' && <DevTools />}
    </div>
  </Provider>
);

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
