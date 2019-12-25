import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import UserForm from './components/user/';
import Chat from './components/chatbox/';

function App() {
  return (
    <Router forceRefresh={true}>
      <Switch>
        <Route exact path='/'>
          <UserForm />
        </Route>
        <Route exact path='/chat'>
          <Chat />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
