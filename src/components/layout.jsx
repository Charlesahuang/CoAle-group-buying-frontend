import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Profile from '../pages/profile';
// import About from './components/About';
// import Contact from './components/Contact';
import Footer from './footer';
import Header from './header'
import Home from '../pages/home';
import Search_page from '../pages/search_page';
import Cart from '../pages/cart';
import Pay from '../pages/pay';
import Order from '../pages/Order';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Layout() {
  const userData = useSelector(state => state.user);
  const userToken = useSelector(state => state.userToken);
  const history = useHistory()
  useEffect(() => {
    if (!userData) {
      history.push('/login')
    }
  }, [userData])

  useEffect(() => {
    if (!userToken) {
      history.push('/login')
    }
  }, [userToken])

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/Search" component={Search_page} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/pay" component={Pay} />
        <Route exact path="/order" component={Order} />

      </Switch>

      <Footer />
    </Router>
  );
}

export default Layout;
