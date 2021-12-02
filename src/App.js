import './App.css';

import Login from '../src/pages/loginPage'
import Register from './pages/signupPage';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import CarBook from './pages/bookCar';
import UserBookings from './pages/userBookings';
import addCar from './pages/addCar';
import EditCar from './pages/edtCar';
import Admin from './pages/admin';
import 'antd/dist/antd.css';
function App() {
  return(
    <Router>
        <Switch>
          <Route exact path='/booking'><UserBookings/></Route>
          <Route exact path='/' component={Login}></Route>
          <Route exact path='/signup'><Register/></Route>
          <Route exact path='/home'><Dashboard/></Route>
          <Route exact path='/admin' component={Admin}></Route>
          <Route exact path='/addCar'  component={addCar}></Route>
          <Route path='/rent/:VehicleID' render={(props)=><CarBook{...props}/>}/>
          <Route path='/editCar/:VehicleID' render={(props)=><EditCar{...props}/>}/>
          
        </Switch>
 
 
     
    </Router>
   
  )};

export default App;
