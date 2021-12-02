import React, { useState,useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { Navbar } from "../Components/Navbar";
import { message,InputNumber } from "antd";
import { Col, Row, Button,Divider, DatePicker, Select,Menu } from "antd";
import Spinner from "../Components/PageLoader";
import { bookCars } from "../Redux/actions/rentalAction";
import {getCars} from '../Redux/actions/vehicleAction';
import Axios from "axios";
import { useHistory } from "react-router-dom"; 
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
  const [keyboard, setKeyboard] = useState(true);
  const {cars}=useSelector(state=>state.carsReducer)
  const {loading}=useSelector(state=>state.alertsReducer)
  const dispatch=useDispatch()
  const [car, setCar] = useState([]);
  const [startDate,setStartDate]=useState([]);
  const [returnDate,setReturnDate]=useState([]);
  const [totalDays,setTotalDays]=useState(0);
  const [totalAmount,setTotalAmount]=useState(0);
  const [Qty,setQty]=useState(1);
  const [payNow,setPayNow]=useState(1);
  const history=useHistory();
  useEffect(()=>{
    
    if(cars.length===0){
      dispatch(getCars())
    }
    else{
      setCar(cars.find(v=>v.VehicleID===match.params.VehicleID))
    }
  },[cars])
  useEffect(()=>{
    if(totalDays<7){
      setTotalAmount(Qty*totalDays*car.Daily)
    }
    else{
      setTotalAmount(Qty*totalDays*car.Weekly)
      // setTotalAmount(Math.floor(totalDays/7)*car.Weekly+Math.floor(totalDays%7)*car.Daily)         
    }
  },[totalDays])

  function selectTimeSlots(val){
    setStartDate(moment(val[0]).format('YYYY-MM-DD'));
    setReturnDate(moment(val[1]).format('YYYY-MM-DD'));
    setTotalDays(Math.floor((Math.abs(val[1]-val[0]))/(1000*60*60*24)))
    console.log(startDate)
    Axios.get('http://localhost:3001/rental',{
    }).then((res)=>{
      console.log(res.data);
    }).catch((err)=>{
      console.log(err)
    });
  }
  const { Option } = Select;
  function book(val){
    const current = new Date();
    const today = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;
    var x=JSON.parse(localStorage.getItem('customer'))
    console.log(Qty)
    console.log(startDate)
    if (totalDays<7){
      console.log(payNow)
      console.log(totalAmount)
      console.log(returnDate)
      if(payNow==1){
        const req={
          CustID:x[0].CustID,
          VehicleID:car.VehicleID,
          StartDate:startDate,
          OrderDate:today,
          RentalType:1,
          Qty:Qty,
          ReturnDate:returnDate,
          TotalAmount:totalAmount,
          PaymentDate:today
        };
        if (!isNaN(x[0].CustID)){
          Axios.post("http://localhost:3001/rental",req).then((res)=>
          {
            dispatch({ type: "LOADING", payload: false });
            message.success("Your car booked successfully");
            console.log(res.data)
            history.push('/home')
          }).catch((err)=>{
            console.log(err);
            dispatch({ type: "LOADING", payload: false });
            message.error("Something went wrong , please try later");
          });
          }
      }
      else{
        const req={
          CustID:x[0].CustID,
          VehicleID:car.VehicleID,
          StartDate:startDate,
          OrderDate:today,
          RentalType:1,
          Qty:Qty,
          ReturnDate:returnDate,
          TotalAmount:totalAmount,
          PaymentDate:null
        };
        if (!isNaN(x[0].CustID)){
          Axios.post("http://localhost:3001/rental",req).then((res)=>
          {
            dispatch({ type: "LOADING", payload: false });
            message.success("Your car booked successfully");
            console.log(res.data)
            history.push('/home')
          }).catch((err)=>{
            console.log(err);
            dispatch({ type: "LOADING", payload: false });
            message.error("Something went wrong , please try later");
          });
          }
      }
      
    }
    else{
      if(payNow==1){
        const req={
          CustID:x[0].CustID,
          VehicleID:car.VehicleID,
          StartDate:startDate,
          OrderDate:today,
          RentalType:7,
          Qty:Qty,
          ReturnDate:returnDate,
          TotalAmount:totalAmount,
          PaymentDate:today
        };
        if (!isNaN(x[0].CustID)){
          Axios.post("http://localhost:3001/rental",req).then((res)=>
          {
            dispatch({ type: "LOADING", payload: false });
            message.success("Your car booked successfully");
            console.log(res.data)
            history.push('/home')
          }).catch((err)=>{
            console.log(err);
            dispatch({ type: "LOADING", payload: false });
            message.error("Something went wrong , please try later");
          });
          }
      }
      else{
        const req={
          CustID:x[0].CustID,
          VehicleID:car.VehicleID,
          StartDate:startDate,
          OrderDate:today,
          RentalType:7,
          Qty:Qty,
          ReturnDate:returnDate,
          TotalAmount:totalAmount,
          PaymentDate:null
        };
        if (!isNaN(x[0].CustID)){
          Axios.post("http://localhost:3001/rental",req).then((res)=>
          {
            dispatch({ type: "LOADING", payload: false });
            message.success("Your car booked successfully");
            console.log(res.data)
            history.push('/home')
          }).catch((err)=>{
            console.log(err);
            dispatch({ type: "LOADING", payload: false });
            message.error("Something went wrong , please try later");
          });
          }
      }
   
    };
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
            {
              totalDays<7?
              <p>Daily Rental Rate: $<b>{car.Daily}</b> </p>:
              <p>Weekly Rental Rate: $<b>{car.Weekly}</b></p>

            }
         
          </div>
          <Divider type='horizontal' dashed style={{borderColor:"#CA0046"}}>Select Time Slots</Divider>
          
          <div align="right">
          <RangePicker showTime={{format:'HH:mm'}} format='MMM DD yyyy HH:mm' onChange={selectTimeSlots}></RangePicker>
            <p>Total Days: <b>{totalDays}</b></p>  
            <h2>TotalAmount:$ <b>{isNaN(totalAmount)?0:totalAmount}</b></h2>
            <Row justify="space-around">
            <InputNumber min={1} max={10} keyboard={keyboard} defaultValue={1} onChange={(val)=>{setQty(val)}} />  
            <Select
            style={{ width: 170 }}
            placeholder="Payment Option"
            optionFilterProp="children"
            onChange={(val)=>{
              setPayNow(val)
            }}
            filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          >
            <Option value="1">PayNow</Option>
            <Option value="0">PayLater</Option>

          </Select>
            </Row>
          
            <Button type="primary" className="btn2" shape="round" 
              style={{background: "#CA0046",color:"aliceblue", boxShadow: "none",border:"1px solid", padding: "5px 15px", height:"50px",width:"50pxS" }} 
              shape="round" onClick={book}>Book Now </Button>
          </div>

        </Col>
      </Row>
     </div>
     
   )
 }
 
export default CarBook;