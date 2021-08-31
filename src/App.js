
import './App.css';
import {
  useHistory,
  Switch,
  Route
} from "react-router-dom";

import Landing from './components/routes/landing';
import Login from './components/routes/login'
import { useState } from 'react';
// import Navbar from './components/router/nav/index';
// import Carts from './components/elements/card';




function App() {
  let history=useHistory();
  const [user, setUser]=useState({});
  const [auth, setAuth]= useState(false)
  const getUser=(user)=>{
    setUser(user)
    setAuth(true)
    history.push('/')
  }
  const logout=()=>{
    setUser({})
    setAuth(false)
  }
  return (
    <div>
      <Switch>
        <Route exact path="/login">
          <Login getUser={getUser} auth={auth}/>
        </Route>
        <Route exact path="/">
          <Landing auth={auth} user={user}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
