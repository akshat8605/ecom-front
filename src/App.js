
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import Loding from './components/router/Lading';
// import Navbar from './components/router/nav/index';
// import Carts from './components/elements/card';




function App() {
  return (
    <div>
      <Switch>
        <Router exact path="/">
          <Loding/>
        </Router>
      </Switch>
    </div>
  );
}

export default App;
