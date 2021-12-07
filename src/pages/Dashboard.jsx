import Spinner from '../Components/PageLoader'
import {Navbar} from "../Components/Navbar/index";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect,useState } from "react";
import {getCars} from '../Redux/actions/vehicleAction';
import { Row,Col,Button,DatePicker,Menu,Dropdown,Select} from 'antd';
import { Link,NavLink } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';
import Axios from 'axios';
import { message } from 'antd';
import { LogoText, p } from "../styles";
import moment from 'moment';

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
const {RangePicker}=DatePicker;
const { Option } = Select;
function Dashboard(props){
  const [selectedMenuItem, setSelectedMenuItem]= useState('1');
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
  const [visible, setVisible] = useState(true);
  const {cars}=useSelector(state=>state.carsReducer)
  const {loading}=useSelector(state=>state.alertsReducer)
  const dispatch=useDispatch()
  const [carsList, setCarsList] = useState([]);
  const [category,setCategory]=useState('');
  const [startDate,setStartDate]=useState('');
  const [returnDate,setReturnDate]=useState('');
  const [type,setType]=useState('');
  const onChange=()=>{
    Axios.post("http://localhost:3001/filter",{StartDate:startDate,ReturnDate:returnDate,Type:type,Category:category}).then((res)=>{setCarsList(res.data)});
    console.log(carsList);
    setVisible(!visible);
    // carsList.map(car=>{
    //   return <Col lg={5} sm={24} xs={24} gutter={40} className='car-card'>
    //     <div className="car p-2 bs1.2">
    //    <NavLink to={`/rent/${car.VehicleID}`}><img src={car.imagescol} className="carimg"/></NavLink> 
    //       <div className="car-content d-flex align-items-center justify-content-between">
    //           <div>
                
    //           <p className='boxx'>{car.Description} {car.Year}</p>
    //           <Row justify="left" className=' d-flex justify-content-between mr-4 p-5 '>
    //             {
    //               car.Category===1?
    //               <div>
    //                 <p className="desc"> Luxury</p>                                                                                            
    //               </div>:
    //               <div>
    //                 <p className="desc"> Basic</p>
                   
    //               </div>
                    
    //             }
    //             <Switch val={car.Type}/>
    //             <p className="desc">{car.Daily} (D) </p>
    //             <p className="desc">{car.Weekly} (W)  </p>
    //             <Button type="primary" style={{background: "rgb(181,77,241)"}} shape="round" className="book-btn mr-2" ><Link to={`/rent/${car.VehicleID}`}>Book Now </Link> </Button>
    //           </Row>
              
    //           </div>
    //       </div>
          
    //     </div>
        
    //   </Col>
    // })
  }
  
  // const getAllCars=()=>{
  //   Axios.get("http://localhost:3001/vehicles").then((response)=>{
  //     console.log(response.data);
  //     setCarsList(response.data);
  //   });
  // };
 
  useEffect(()=>{
      dispatch(getCars())
      
  },[])
  
  
  function setFilter(values){
   setStartDate(moment(values[0]).format('YYYY-MM-DD'));
   setReturnDate(moment(values[1]).format('YYYY-MM-DD'));
  }
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
      <Row className='mt-3' justify='space-around'> 
      
          <RangePicker onChange={setFilter}/>
          <Select
            style={{ width: 200 }}
            placeholder="Select a car type"
            optionFilterProp="children"
            onChange={(val)=>{
              setType(val)
            }}
            filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          >
            <Option value="1">Compact</Option>
            <Option value="2">Medium</Option>
            <Option value="3">Large</Option>
            <Option value="4">SUV</Option>
            <Option value="5">Truck</Option>
            <Option value="6">VAN</Option>
          </Select>
          <Select
            style={{ width: 200 }}
            placeholder="Select car Category"
            optionFilterProp="children"
            onChange={(val)=>{
              setCategory(val)
            }}
            filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          >
            <Option value="0">Basic</Option>
            <Option value="1">Luxury</Option>
         
          </Select>
          <Button type="primary" className='btnz' icon={<SearchOutlined />} onClick={onChange}>
            Search
        </Button>
      </Row>
  
      {<Row justify="center" gutter={40} className='mt-4'>
        {
          filteredCars.map(car=>{
            return <Col lg={5} sm={24} xs={24} gutter={40}>
              <div className="car p-2 bs1.2">
             <NavLink to={`/rent/${car.VehicleID}`}><img src={car.imagescol} className="carimg"/></NavLink> 
                <div className="car-content d-flex align-items-center justify-content-between">
                    <div>
                      
                    <p className='boxx'>{car.Description} {car.Year}</p>
                    <Row justify="left" className=' d-flex justify-content-between mr-4 p-5 '>
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
                      <Button type="primary" style={{background: "white"}} shape="round" className="book-btn mr-2" ><Link to={`/rent/${car.VehicleID}`}>Book Now </Link> </Button>
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

export default Dashboard