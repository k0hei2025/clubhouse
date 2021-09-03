import logo from './logo.svg';
import './App.css';
import SignupForm from './components/Authentication'
import { Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard'
import { Fragment } from 'react';
import JoinRoom from './components/Join'

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path='/' component={SignupForm} exact="true" ></Route>
        <Route path='/dashboard' component={Dashboard} exact="true" ></Route>

        <Route path='/joinRoom' component={JoinRoom} exact="true"></Route>
      </Switch>
    </Fragment>
  );
}

export default App;
