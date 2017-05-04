import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './components/Layout';
import Register from './components/Register'

let routes = (
    <Route path="/" component={Layout}>
      <Route path="/register" component={Register}/>
    </Route>
);

export default routes;
