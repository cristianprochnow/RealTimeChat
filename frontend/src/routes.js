import React from 'react';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';

import Chat from './pages/Chat';
import Home from './pages/Home';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/chat" exact component={Chat} />
      </Switch>
    </BrowserRouter>
  );
}
