import './App.css';
import Login from '../src/pages/loginPage'
import Register from './pages/signupPage';
import { BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import CarBook from './pages/bookCar';
import UserBookings from './pages/userBookings';
import addCar from './pages/addCar';
import EditCar from './pages/edtCar';
import Admin from './pages/admin';
import 'antd/dist/antd.css';
import CustomerList from './pages/customerList';
import VehicleList from './pages/vehicleList';
import ReturnCar from './Components/returnForm';
import ReturnCarPage from './pages/returnPage';
function App() {
  return(
    <Router>
        <Switch>
          <Route exact path='/booking'><UserBookings/></Route>
          <Route exact path='/login'  component={Login}></Route>
          <Route exact path='/customerList' component={CustomerList}></Route>
          <Route exact path='/vehicleList' component={VehicleList}></Route>
          <Route exact path='/signup'><Register/></Route>
          <Route exact path='/home'><Dashboard/></Route>
          <Route exact path='/admin' component={Admin}></Route>
          <Route exact path='/addCar'  component={addCar}></Route>
          <Route exact path='/returnCar'  component={ReturnCarPage}></Route>
          <Route path='/returnCar/:VehicleID' render={(props)=><ReturnCar{...props}/>}/>
          <Route path='/rent/:VehicleID' render={(props)=><CarBook{...props}/>}/>
          <Route path='/editCar/:VehicleID' render={(props)=><EditCar{...props}/>}/>
          <Redirect exact from="/" to="login" />
        </Switch>
 
 
     
    </Router>
   
  )};

export default App;
