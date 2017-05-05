import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './containers/Layout';
import Register from './components/Register';
import NewUser from './containers/NewUser';
import UserShow from './containers/UserShow'
import Splash from './components/Splash';

let routes = (
    <Route path="/" component={Layout}>
      <Route path="/register" component={Register}/>
      <Route path="/users/new" component={NewUser}/>
      <Route path="/home" component={UserShow}/>
      <Route path="/splash" component={Splash}/>
    </Route>
);

export default routes;
