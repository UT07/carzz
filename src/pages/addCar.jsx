import React from 'react';
import { Navbar } from '../Components/Navbar';
import Axios  from 'axios';
import { useDispatch } from "react-redux";
import { Col , Row , Form , Input,message} from 'antd';

function addCar({match}){


   const onFinish=(val)=>{
    Axios.post('http://localhost:3001/vehicles',{VehicleID:val.VehicleID,Description:val.Description, Year:val.Year, Type:val.Type, Category:val.Category}).then((res)=>{
      
        message.success("Your car booked successfully");
        console.log(res.data)
       
        }).catch((err)=>{
        console.log(err);

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
                           <h3>Add New Car</h3>
                           <hr />
                           <Form.Item name='VehicleID' label='VehicleID' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item>
                           <Form.Item name='Description' label='Description' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item>
                           <Form.Item name='Year' label='Year' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item>
                           <Form.Item name='Type' label='Type' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item>
                           <Form.Item name='Category' label='Category' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item>
                           <Form.Item name='Daily' label='Daily Rate' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item>
                           <Form.Item name='Weekly' label='Weekly Rate' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item>
                           <div className='text-right'>
                           <button className='btn1' onClick={()=>{
                               
                           }}>ADD CAR</button>
                           </div>
                       </Form>
                   </Col>
               </Row>
        </div>
    )
}
export default addCar