import Spinner from '../Components/PageLoader'
import {Navbar} from "../Components/Navbar/index";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect,useState } from "react";
import {getCars} from '../Redux/actions/vehicleAction';
import { Row,Col,Button} from 'antd';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { LogoText, p } from "../styles";

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
function Dashboard(props){
  const {cars}=useSelector(state=>state.carsReducer)
  const {loading}=useSelector(state=>state.alertsReducer)
  const dispatch=useDispatch()
  const [carsList, setCarsList] = useState('');
  // const getAllCars=()=>{
  //   Axios.get("http://localhost:3001/vehicles").then((response)=>{
  //     console.log(response.data);
  //     setCarsList(response.data);
  //   });
  // };
  console.log(carsList.length) 
  useEffect(()=>{
      dispatch(getCars())
  },[])
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

      <Row justify="center" gutter={40} className='mt-4'>
        {
          cars.map(car=>{
            return <Col lg={5} sm={24} xs={24} gutter={40} className='car-card'>
              <div className="car p-2 bs1.2">
              <img src={car.imagescol} className="carimg"/>  
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
                      <p className="desc">{car.Daily}  </p>
                      <p className="desc">{car.Weekly}  </p>
                      <Button type="primary" style={{background: "rgb(181,77,241)"}} shape="round" className="book-btn mr-2"><Link to={`/rent/${car.VehicleID}`}>Book Now </Link> </Button>
                    </Row>
                    
                    </div>
                </div>
                
              </div>
              
            </Col>
          })
        }
      </Row>
    </div>
    
    
  );
  
}

export default Dashboard