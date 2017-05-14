import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './containers/Layout';
import Register from './components/Register';
import NewUser from './containers/NewUser';
import UserShow from './containers/UserShow';
import NewMove from './containers/NewMove';
import MoveShow from './containers/MoveShow';
import Splash from './components/Splash';
import EditUser from './containers/EditUser'

let routes = (
    <Route path="/" component={Layout}>
      <Route path="/register" component={Register}/>
      <Route path="/users/new" component={NewUser}/>
      <Route path="/users/:id" component={UserShow}>
        <IndexRoute component={MoveShow}/>
        <Route path="/moves/new" component={NewMove}/>
        <Route path="/user/edit" component={EditUser}/>
      </Route>
      <Route path="/splash" component={Splash}/>
    </Route>
);

export default routes;
