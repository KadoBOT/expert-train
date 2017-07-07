import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { injectGlobal } from 'styled-components';
import { fontFace } from 'polished';

import registerServiceWorker from './registerServiceWorker';
import App from './components/';
import configureStore from './store';
import rootSaga from './components/sagas';

const store = configureStore(window.__INITIAL_STATE__); // eslint-disable-line
store.runSaga(rootSaga);

// eslint-disable-next-line
injectGlobal`
  ${fontFace({
    fontFamily: 'Rubik',
    fontFilePath: 'https://fonts.googleapis.com/css?family=Rubik',
  })}
`;

const Main = () => (
  <Provider store={store}>
    <div>
      <Router>
        <App />
      </Router>
    </div>
  </Provider>
);

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
