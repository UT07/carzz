
import {Navbar} from "../../Components/Navbar/index";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect,useState } from "react";
import {getCars} from '../../Redux/actions/vehicleAction';
import {BoxContainer, HeaderText} from '../../styles';
import Axios from 'axios';

function Dashboard(props){
  const {cars,loading}=useSelector(state=>state.carsReducer)
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
      <Navbar/>
      <HeaderText>The length of cars is {cars.length}</HeaderText>
      {cars.map((val,key)=>{
        return (
          <BoxContainer>
            <HeaderText>Description:{val.Description}</HeaderText>
          </BoxContainer>
        );
      })}
    </div>
    
    
  );
  
}

export default Dashboard