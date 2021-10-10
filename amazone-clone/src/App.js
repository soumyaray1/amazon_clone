import React from 'react'
import { Router, Switch } from 'react-router'
import Header from './Header'

function App() {
  return (
    <Router>
    <div className="app">
    <Switch>
    <Router path="/login">
      <h1>login page</h1>
    </Router>
    {/* This is the default route */}
    <Route path="/">
      <h1>Home Page!!!</h1>
    </Route>
    </Switch>
    </div>
    </Router>
      
    
  );
}

export default App

