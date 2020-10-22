import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Cart from '../pages/Cart';
import Product from '../pages/Product';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} isPublic />
    <Route path="/register" exact component={Register} isPublic />
    <Route path="/cart" exact component={Cart} />
    <Route path="/products/:product+" component={Product} />
  </Switch>
);

export default Routes;
