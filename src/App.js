import './App.css';
import {AppContainer} from './styles';
import {AccountBox } from './Components/AccountBox';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return(
    <Router>
      <AppContainer>
        <Switch>
          <Route exact path='/'><AccountBox/></Route>
          <Route exact path='/home'><Dashboard/></Route>
        </Switch>
      </AppContainer>
    </Router>
   
  )};

export default App;
