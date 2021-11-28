import './App.css';
import {AppContainer} from './styles';

import Login from '../src/pages/loginPage'
import Register from './pages/signupPage';
import { BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import CarBook from './pages/bookCar';
import 'antd/dist/antd.css';
function App() {
  return(
    <Router>
        <Switch>
          <Route exact path='/'><Login/></Route>
          <Route exact path='/signup'><Register/></Route>
          <Route exact path='/home'><Dashboard/></Route>
          <Route path='/rent/:VehicleID' render={(props)=><CarBook{...props}/>}/>
        </Switch>
 
 
     
    </Router>
   
  )};

export default App;
