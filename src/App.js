import './App.css';
import {AppContainer} from './styles';
import {AccountBox } from './Components/AccountBox';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import CarBook from './pages/Dashboard/bookCar';
import 'antd/dist/antd.css';
function App() {
  return(
    <Router>
      <AppContainer>
        <Switch>
          <Route exact path='/'><AccountBox/></Route>
          <Route exact path='/home'><Dashboard/></Route>
          <Route exact path='/rent'><CarBook/></Route>a 
        </Switch>
      </AppContainer>
    </Router>
   
  )};

export default App;
