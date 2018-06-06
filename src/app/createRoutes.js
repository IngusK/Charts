import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Wrapper from './routes/wrapper/index.jsx';
import Home from './routes/home/index.jsx';
import { Provider } from 'mobx-react';

import store from './store';

const stores = { store };

const createRoutes = () => (
  <Provider {...stores}>
    <Router>
      <Wrapper>
        <Route exact path="/" component={Home} />
      </Wrapper>
    </Router>
  </Provider>
);

export default createRoutes;
