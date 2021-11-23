import Spinner from '../../Components/PageLoader'
import {Navbar} from "../../Components/Navbar/index";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect,useState } from "react";
import {getCars} from '../../Redux/actions/vehicleAction';
import { Row,Col,Button} from 'antd';
import Axios from 'axios';
import { LogoText, SmallTextVehicle } from "../../styles";
import logo_img from  '../../assets/images/logo_image.jpg';
const Switch=({val})=>{
  switch (val) {
    case 1:
      return <SmallTextVehicle className="desc"> Compact</SmallTextVehicle> 
    case 2:
      return <SmallTextVehicle className="desc"> Medium</SmallTextVehicle> 
    case 3:
      return <SmallTextVehicle className="desc">Large</SmallTextVehicle>
    case 4:
      return <SmallTextVehicle className="desc">SUV</SmallTextVehicle> 
    case 5:
      return <SmallTextVehicle className="desc">Truck</SmallTextVehicle> 
    case 6:
      return <SmallTextVehicle className="desc">VAN</SmallTextVehicle> 
    default:
      return null;

  }
}
function Dashboard(props){
  const {cars}=useSelector(state=>state.carsReducer)
  const {loading}=useSelector(state=>state.alertsReducer)
  const dispatch=useDispatch()
  const [carsList, setCarsList] = useState('');
  const getAllCars=()=>{
    Axios.get("http://localhost:3001/vehicles").then((response)=>{
      console.log(response.data);
      setCarsList(response.data);
    });
  };
  console.log(carsList.length) 
  useEffect(()=>{
      dispatch(getCars())
  },[])
  return(
    <div>
      {loading==true && (<Spinner/>)}
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
              <div className="car p-2 bs1.2 mt-2  ">
                <img src={logo_img} className="carimg"/>
                <div className="car-content d-flex align-items-center justify-content-between">
                    <div>
                      
                    <LogoText>{car.Description} {car.Year}</LogoText>
                    <Row>
                      {
                        car.Category==1?
                        <div>
                          <SmallTextVehicle className="desc"> Luxury</SmallTextVehicle>                                                                                            
                        </div>:
                        <div>
                          <SmallTextVehicle className="desc"> Basic</SmallTextVehicle>
                         
                        </div>
                          
                      }
                      <Switch val={car.Type}/>
                      <SmallTextVehicle className="desc">{car.Daily}  </SmallTextVehicle>
                      <SmallTextVehicle className="desc">{car.Weekly}  </SmallTextVehicle>
                      <Button type="primary" style={{background: "rgb(181,77,241)"}} shape="round" onClick="" className="book-btn mr-2">Book Now </Button>
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