import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/login';
import Layout from './components/layout';
import Verify from './pages/verify'
import Resgistion from './pages/resgistion'
import store  from './store';
import { Provider } from 'react-redux';
 
function App() {
  return (
    <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/resgistion" component={Resgistion} />
        <Route exact path="/verify" component={Verify} />
        <Route path="/" component={Layout} />
      </Switch>
    </Router>
    </Provider>
  );
}

export default App;
