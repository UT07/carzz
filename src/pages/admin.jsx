import Spinner from '../Components/PageLoader'
import {Navbar} from "../Components/Navbar/index";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect,useState } from "react";
import {getCars} from '../Redux/actions/vehicleAction';
import {message, Row,Col,Button,DatePicker,Popconfirm,Select} from 'antd';
import { Link,NavLink } from 'react-router-dom';
import { SearchOutlined,DeleteOutlined, EditOutlined } from '@ant-design/icons';
import Axios from 'axios';


const Switch=({val})=>{
  switch (val) {
    case 1:
      return <p className="desc"> Compact</p> 
    case 2:
      return <p className="desc"> Medium</p> 
    case 3:
      return <p className="desc">Large</p>
    case 4:
      return <p className="desc">SUV</p> 
    case 5:
      return <p className="desc">Truck</p> 
    case 6:
      return <p className="desc">VAN</p> 
    default:
      return null;

  }
}

function Admin(props){
  
  const componentSwitch=(val)=>{
    switch (val) {
      case '1':
        return <h3 className="desc"> Compact</h3> 
      case '2':
        return <h3 className="desc"> Medium</h3> 
      case '3':
        return <h3 className="desc">Large</h3>
      case '4':
        return <h3 className="desc">SUV</h3> 
      case '5':
        return <h3 className="desc">Truck</h3> 
      case '6':
        return <h3 className="desc">VAN</h3> 
      default:
        return null;
  
    }
  }

  const {cars}=useSelector(state=>state.carsReducer)
  const {loading}=useSelector(state=>state.alertsReducer)
  const dispatch=useDispatch()
  const [carsList, setCarsList] = useState([]);
  const [category,setCategory]=useState('');
  const [startDate,setStartDate]=useState('');
  const [returnDate,setReturnDate]=useState('');
  const [type,setType]=useState('');
 
  useEffect(()=>{
      dispatch(getCars())
      
  },[])
  
  
  
  const filteredCars=carsList.length===0?cars:carsList
  return(
    <div>
      {loading===true && (<Spinner/>)}
      <Navbar/>
      {/* <HeaderText>The length of cars is {cars.length}</HeaderText>
      {cars.map((val,key)=>{
        return (
          <BoxContainer>
            <HeaderText>Description:{val.Description}</HeaderText>
          </BoxContainer>
        );
      })} */}
      <Row justify="center" gutter={16} className="mt-2">
        <Col lg={20} sm={24}>
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="mt-1 mr-2">Admin Panel</h1>
            <Row justify="space-around" gutter={16} className="mt-2">
            <button type="primary" className="btn1" >
              <a href="/customerList"> Customer Log</a>
            </button>  
            <button type="primary" className="btn1" >
              <a href="/addcar">Add Car</a>
            </button>
            </Row>

            
          </div>
        </Col>
      </Row>

      
      {<Row justify="center" gutter={40} className='mt-4'>
        {
          cars.map(car=>{
            return <Col lg={5} sm={24} xs={24} gutter={40} className='car-card'>
              <div className="car p-2 bs1.2">
             <NavLink to={`/rent/${car.VehicleID}`}><img src={car.imagescol} className="carimg"/></NavLink> 
                <div className="car-content d-flex align-items-center justify-content-between">
                    <div>
                      
                    <p className='boxx'>{car.Description} {car.Year}</p>
                    <Row justify="center" className=' d-flex justify-content-between mr-4 p-5 '>
                      {
                        car.Category===1?
                        <div>
                          <p className="desc"> Luxury</p>                                                                                            
                        </div>:
                        <div>
                          <p className="desc"> Basic</p>
                         
                        </div>
                          
                      }
                      <Switch val={car.Type}/>
                      <p className="desc">{car.Daily} (D) </p>
                      <p className="desc">{car.Weekly} (W)  </p>
                    
                    <Link to={`/editcar/${car.VehicleID}`} onClick={()=>{
                       localStorage.setItem('vehicleID',car.VehicleID)
                       
                    }}>
                      <EditOutlined
                        className="mr-3"
                        style={{ cursor: "pointer" }}
                      />
                    </Link>

                    <Popconfirm
                      title="Are you sure to delete this car?"
                      onConfirm={()=>{Axios.post('http://localhost:3001/deleteCar',{VehicleID:localStorage.getItem('vehicleID')}).then((res)=>{
                        message.success("Your car edited successfully");
                        console.log(res.data)
       
                      }).catch((err)=>{
                        console.log(err);

                        message.error("Something went wrong , please try later");
                      })}}
                      
                      okText="Yes"
                      cancelText="No"
                    >
                      <DeleteOutlined
                        style={{  cursor: "pointer" }}
                      />
                    </Popconfirm>
            
                    </Row>
                    
                    </div>
                </div>
                
              </div>
              
            </Col>
          })
        }
      </Row>
    }

    </div>
    
    
    
  );
  
}

export default Admin