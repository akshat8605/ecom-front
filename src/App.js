
import './App.css';
import {

  Switch,
  Route
} from "react-router-dom";
import Landing from './components/routes/landing';
import Login from './components/routes/login'
// import Navbar from './components/router/nav/index';
// import Carts from './components/elements/card';




function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/">
          <Landing/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
