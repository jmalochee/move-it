import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './containers/Layout';
import Register from './components/Register';
import App from './containers/App';
import NewMove from './containers/NewMove';
import MoveShow from './containers/MoveShow';
import EditUser from './containers/EditUser';

let routes = (
  <Route path="/" component={Layout}>
    <Route path="/register" component={Register}/>
    <Route path="/app" component={App}>
      <Route path="/app/moves/new" component={NewMove}/>
      <Route path="/app/moves/:id" component={MoveShow}/>
      <Route path="/app/user/edit" component={EditUser}/>
    </Route>
  </Route>
);

export default routes;
