import React, { useState,useEffect} from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Navbar } from "../Components/Navbar";
import { Col, Row, Divider, DatePicker, Checkbox, Modal } from "antd";
import Spinner from "../Components/PageLoader";
import {getCars} from '../Redux/actions/vehicleAction';

import moment from "moment";
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
const { RangePicker } = DatePicker;
 export function CarBook({match}){
  const {cars}=useSelector(state=>state.carsReducer)
  const {loading}=useSelector(state=>state.alertsReducer)
  const dispatch=useDispatch()
  const [car, setCar] = useState([]);
  const [startDate,setStartDate]=useState([]);
  const [returnDate,setReturnDate]=useState([]);
  const [totalDays,setTotalDays]=useState(0);
  const [totalAmount,setTotalAmount]=useState(0);
  useEffect(()=>{
    
    if(cars.length===0){
      dispatch(getCars())
    }
    else{
      setCar(cars.find(v=>v.VehicleID===match.params.VehicleID))
    }
  },[cars])
  console.log(match.params)
  console.log(car);
  function selectTimeSlots(val){
    setStartDate(moment(val[0]).format('YYYY-MM-DD'));
    setReturnDate(moment(val[1]).format('YYYY-MM-DD'));
    setTotalDays(Math.floor((Math.abs(val[1]-val[0]))/(1000*60*60*24)))
  }
   return(
    <div>
      <Navbar/>
      {loading===true && (<Spinner/>)}
      <Row justify="center" className="d-flex align-items-center" style={{minHeight
      :'100vh'}}>
        <Col lg={10} sm={24} xs={24}>
          <img src={car.imagescol} className="carimg2 bs1"/>
        </Col>
        <Col lg={10} sm={24} xs={24} className="text-right" >
          <Divider type='horizontal' dashed style={{borderColor:"#CA0046"}}>Car Info</Divider>
          <div style={{ textAlign: "right" }}>
            <p>{car.Description} {car.Year}</p>
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
            <Row justify="end">
            <p className="desc">{car.Daily} (D) </p>
            <p className="desc">{car.Weekly} (W)  </p>
            </Row> 
          </div>
          <Divider type='horizontal' dashed style={{borderColor:"#CA0046"}}>Select Time Slots</Divider>
          <RangePicker showTime={{format:'HH:mm'}} format='MMM DD yyyy HH:mm' onChange={selectTimeSlots}></RangePicker>
          {totalDays}
        </Col>
      </Row>
     </div>
     
   )
 }
 
export default CarBook;