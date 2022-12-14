import './App.css';
import { Switch, Route} from 'react-router-dom';
import { Home } from './components/Home/Home.jsx';
function App() {

  return (
    <div>
    <Switch>
      <Route path='/'> 
      
      <Home />

      </Route>
    </Switch>
    </div>
  );
}

export default App;
