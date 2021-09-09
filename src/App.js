
import './App.css';
import {
  useHistory,
  Switch,
  Route
} from "react-router-dom";

import Landing from './components/routes/landing';
import Login from './components/routes/login'
import React,  { useState } from 'react';
import Search from './components/routes/search'
import Product from './components/routes/product'
// import Navbar from './components/router/nav/index';
// import Carts from './components/elements/card';

function App({store}) {
  let history=useHistory();
  const [user, setUser]=useState({});
  const [auth, setAuth]= useState(false)
  const [searchValue, setSearch]= useState(false)
  const getUser=(user)=>{
    setUser(user)
    setAuth(true)
    history.push('/search')
  }
  
  const logout=()=>{
    setUser({})
    setAuth(false)
  }
  return (
    <div>
      <Switch>
        
      <Route exact path="/product/:id">
          <Product getUser={getUser} auth={auth} searchValue={searchValue} setSearch={setSearch}/>
        </Route>
      <Route exact path="/search">
          <Search getUser={getUser} auth={auth} searchValue={searchValue} setSearch={setSearch}/>
        </Route>
        <Route exact path="/login">
          <Login getUser={getUser} auth={auth}/>
        </Route>
        <Route exact path="/">
          <Landing auth={auth} user={user} setSearch={setSearch}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
