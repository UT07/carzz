import React from 'react';
import { Navbar } from '../Components/Navbar';
import Axios  from 'axios';
import { NavLink,Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { Col , Row , Form , Input,message,Button} from 'antd';
import { useEffect } from 'react';
import { useState } from 'react';
import moment from 'moment';

function ReturnCarPage({match}){
    const [dataList,setDataList]=useState([])

    const init=()=>{
        Axios.get("https://carz3330.netlify.app/returnCarView").then((res)=>{
            setDataList(res.data)
            
        })
    }
    useEffect(()=>{
        init()
    },[])
   return(
       <div>
        <Navbar/>
       <Row justify="center" gutter={20} className='mt-4'>
        {
          dataList.map(car=>{
            return <Col lg={7} sm={24} xs={24} gutter={40} className='car-card'>
              <div className="car p-4 bs1.2">
             <NavLink to={`/returnCar/${car.VIN}`}><img src={car.imagescol} className="carimg"/></NavLink> 
                <div className="boxess  d-flex align-items-center justify-content-between">
                    <div>
                      
                    <p className='boxx'>{car.Vehicle}</p>
                    
                    <Row justify="left" className='  justify-content-between  '>
                
                      <p style={{color:'whitesmoke'}}>Category: {car.Category}</p>
                      <p style={{color:'whitesmoke'}}>Type: {car.Type}</p>
                      <p style={{color:'whitesmoke'}}>Daily Rate: {car.Daily}  </p>
                      <p style={{color:'whitesmoke'}}>Weekly Rate: {car.Weekly}  </p>
                    </Row> 
                    <Row>
                      <p style={{color:'whitesmoke'}}>Start Date: {moment(car.StartDate).format('YYYY-MM-DD')}</p>
                      <p style={{color:'whitesmoke'}}>Return Date: {moment(car.ReturnDate).format('YYYY-MM-DD')}</p>
                      <p style={{color:'whitesmoke'}}>Total Days: <b><u>{car.TotalDays}</u></b>  </p>
                      
                    </Row>
                    <Row>
                      <p style={{color:'whitesmoke'}}>Customer Name:<b><i>{car.CustomerName}</i></b></p>
                      <p style={{color:'whitesmoke'}}>Total Amount: $<b><u>{car.OrderAmount}</u></b></p>

                      
                    </Row>
                    
                      
                    <Button type="primary" onClick={()=>{
                        console.log(car.VIN)
                          localStorage.setItem('VIN',car.VIN);
                          console.log(localStorage.getItem('VIN'))
                      }} style={{background: "white"}} shape="round" className="book-btn mr-2" ><Link to={`/returnCar/${car.VIN}`}>Return Now </Link> </Button>
                    
                    
                    </div>
                </div>
                
              </div>
              
            </Col>
          })
        }
      </Row>
       </div>
       
   )
}
export default ReturnCarPage