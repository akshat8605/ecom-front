import { Route, Switch } from 'react-router-dom';
import './App.css';
import Landing from './components/routes/landing'


function App() {
  return (
    <div>
        <Switch>
          <Route path="/" exact>
              <Landing/>
          </Route>
          
        
        </Switch>
    </div>
  );
}

export default App;
