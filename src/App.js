import { Route, Switch } from 'react-router-dom';
import './App.css';
import Landing from './components/routes/landing'
import Login from './components/routes/login'


function App() {
  return (
    <div>
        <Switch>
        <Route path="/login" exact>
              <Login/>
          </Route>
          
          <Route path="/" exact>
              <Landing/>
          </Route>
          
          
          
        
        </Switch>
    </div>
  );
}

export default App;
