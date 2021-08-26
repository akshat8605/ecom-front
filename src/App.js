import React from 'react';
import './App.css';
import {
  Switch,
  Route
} from "react-router-dom";
import Landing from './components/routes/landing';
import Login from './components/routes/login'
import Singup from './components/routes/login/Singup'



function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/Singup">
          <Singup />
        </Route>
        <Route exact path="/">
          <Landing/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
