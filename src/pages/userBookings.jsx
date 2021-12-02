import React from 'react';

import { Navbar } from '../Components/Navbar';
import { useSelector } from 'react-redux';
import { Col, Row } from "antd";
import Spinner from '../Components/PageLoader';
import Axios  from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
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
function UserBookings(props){
    const {loading}=useSelector(state=>state.alertsReducer)
    const [bookings,setBookings]=useState([])
    var x=localStorage.getItem('customer')
    const init=()=>{
        loading===true && (<Spinner/>)
        Axios.post("http://localhost:3001/userBookings",{CustID:x.substring(11,14)}).then((res)=>{
            console.log(res.data)
            setBookings(res.data)
        })
    }
    useEffect(()=>{
        init()
    },[])
    function dateDiffInDays(a, b) {  
        a=Date.parse(a);
        b=Date.parse(b);
        console.log(typeof(a))
        const _MS_PER_DAY = 1000 * 60 * 60 * 24;
        console.log(b-a)
      
        return Math.floor((b-a) / _MS_PER_DAY);
      }
      
    return(
        <div>
            
            <Navbar/>
           
            <h1  style={{textAlign:"center", color:"#CA0046"}}>My Trips</h1>
            <Row justify="center" gutter={16}>

                <Col lg={16} sm={24}>
                   {bookings.map((booking)=>{
                       return <Row gutter={16} className="bs1 mt-3 text-left">
                                <Col lg={6} sm={24}>
                                    <Row>
                                    <p><b>{booking.Description}</b></p>
                                    {
                                         booking.Category===1?
                                        <div>
                                            <p className="desc"><i>Luxury</i> </p>                                                                                            
                                        </div>:
                                        <div>
                                            <p className="desc"><i>Basic</i></p>         
                                         </div>               
                                    }
                                    <Switch val={booking.Type}/>
                                    </Row>
                                    
                                    <p>Start Date: {moment(booking.StartDate).format('YYYY-MM-DD')}</p> 
                                    <p>Return Date:{moment(booking.ReturnDate).format('YYYY-MM-DD')}</p>
                                    <p>Date of Booking:{moment(booking.OrderDate).format('YYYY-MM-DD')}</p>
                                    {booking.PaymentDate!==null?<p>Payment Date:{moment(booking.PaymentDate).format('YYYY-MM-DD')}</p>:<p>Payment Date Not Paid</p>}
        
                                    <p>TotalDays: {dateDiffInDays(booking.StartDate,booking.ReturnDate)} </p>
                                    <p>Total Amount:{booking.TotalAmount}</p>
                                </Col>
                                <Col lg={6} sm={24} className='text-right' style={{ marginTop:28,marginLeft:650, alignItems:"flex-end"}}>
                                    <img style={{borderRadius:5}} src={booking.imagescol}  height="140" className="p-2"/>
                                </Col>
                            </Row>
                    }
                   )} 
                </Col>
            </Row>
        </div>
       
          
            
        
    )
}
export default UserBookings