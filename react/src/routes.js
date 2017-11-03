import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './containers/Layout';
import Pitch from './components/Pitch';
import App from './containers/App';
import MoveForm from './containers/MoveForm';
import MoveShow from './containers/MoveShow';
import EditUser from './containers/EditUser';
import NewMove from './containers/NewMove'
import EditMove from './containers/EditMove'

let routes = (
  <Route path="/" component={Layout}>
    <Route path="/register" component={Pitch}/>
    <Route path="/app" component={App}>
      <Route path="/app/moves/new" component={NewMove}/>
      <Route path="/app/moves/:id" component={MoveShow}/>
      <Route path="/app/moves/:id/edit" component={EditMove}/>
      <Route path="/app/user/edit" component={EditUser}/>
    </Route>
  </Route>
);

export default routes;
