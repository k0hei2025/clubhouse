import logo from './logo.svg';
import './App.css';
import SignupForm from './components/Authentication'
import { Route } from 'react-router-dom';
import Dashboard from './components/Dashboard'
import { Fragment } from 'react';
import JoinRoom from './components/Join'

function App() {
  return (
    <Fragment>
      <Route path="/" component={Dashboard} exact="true" > <SignupForm /></Route>
      <Route path='/auth' component={SignupForm} ></Route>
      <Route path='/joinRoom' component={JoinRoom} exact="true"></Route>
    </Fragment>
  );
}

export default App;
