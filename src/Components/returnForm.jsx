import React, { useState,useEffect} from 'react';
import { Navbar } from '../Components/Navbar';
import Axios  from 'axios';
import { useDispatch } from "react-redux";
import moment from 'moment';
import { Col , Row , Form , Input,message, DatePicker} from 'antd';

import { init } from 'aos';

function ReturnCar({match}){

   const [returned,setReturned]=useState(0);
   const [dates,setDate]=useState(0);
   const [VIN,setVIN]=useState('');
   const [amount,setAmount]=useState('');
   const [data,setData]=useState([]);
   const init=()=>{
    console.log(localStorage.getItem('VIN'))
    console.log(data)
    Axios.post('http://localhost:3001/vehicleNoFilterSearch').then((res)=>{
      console.log(moment(res.data[0].ReturnDate).format('YYYY-MM-DD'))
      // console.log(res.data.some(element => moment(element.ReturnDate).format('YYYY-MM-DD')===dates))
      setData(res.data);
      
      var x =(data.map(o=>moment(o.ReturnDate).format('YYYY-MM-DD')))
      for(var i=0;i<x.length;i++){
          if(moment(dates._d).format('YYYY-MM-DD')==x[i]){
            
              setVIN(res.data[i].VIN);
              setAmount(res.data[i].RemainingBalance)

          }
      }
      });
      console.log(amount)
      console.log(VIN)
   }
   useEffect(()=>{
        init()
   },[])
   const onFinish=(val)=>{
    const current = new Date();
    const today = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;
    Axios.post('http://localhost:3001/returnCar',{PaymentDate:today,VehicleID:localStorage.getItem('VIN'), ReturnDate:moment(val.ReturnDate).format('YYYY-MM-DD')}).then((res)=>{
      
        message.success("Your car returned successfully");
        console.log(res.data)      
       
        }).catch((err)=>{
   

        message.error("Something went wrong , please try later");
      });
   }
   const onFinishFailed=()=>{

   }

    return(    
        <div>
            <Navbar/>
            <Row justify='center mt-5'>
                   <Col lg={12} sm={24} xs={24} className='p-2'>
                       <Form className='bs1 p-2' layout='vertical'onFinish={onFinish} onFinishFailed={onFinishFailed} >
                           <h3>Return Car</h3>
                           <hr />
                           
                           <Form.Item name='ReturnDate' label='Select Return Date' rules={[{required: true}]}>
                               <DatePicker onChange={(date)=>{
                                  
                                   
                                  setDate(moment(date._d).format('YYYY-MM-DD'))
                                  console.log(data)
                                  Axios.post('http://localhost:3001/vehicleNoFilterSearch').then((res)=>{
                                    console.log(moment(res.data[0].ReturnDate).format('YYYY-MM-DD'))
                                    // console.log(res.data.some(element => moment(element.ReturnDate).format('YYYY-MM-DD')===dates))
                                    setData(res.data);
                                    
                                    var x =(data.map(o=>moment(o.ReturnDate).format('YYYY-MM-DD')))
                                    for(var i=0;i<x.length;i++){
                                        if(moment(date._d).format('YYYY-MM-DD')==x[i]){
                                          
                                            setVIN(res.data[i].VIN);
                                            setAmount(res.data[i].RemainingBalance)

                                        }
                                    }
                                    });
                                    console.log(amount)
                                    console.log(VIN)
                                    
                                    // x.contains(moment(date._d).format('YYYY-MM-DD'))
                                    // .includes(moment(date._d).format('YYYY-MM-DD')))
                                   }}/>
                           </Form.Item>
                           <Form.Item name='Name' label='Enter your name' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item>
                           
                           
                         
                           
                           <div className='text-right'>
                               <h3>Remaining Amount: ${amount} </h3>
                           <button className='btn1' >RETURN CAR</button>
                           </div>
                       </Form>
                   </Col>
               </Row>
        </div>
    )
}
export default ReturnCar