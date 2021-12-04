import React from 'react';

import { Navbar } from '../Components/Navbar';
import { useSelector } from 'react-redux';
import { Col, Row,Input,Select} from "antd";
import Spinner from '../Components/PageLoader';
import Axios  from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import moment from 'moment';

const{Search}=Input;
const { Option } = Select;
const onSearch = value => {
    console.log(value)
};

function VehicleList(props){
    const {loading}=useSelector(state=>state.alertsReducer)
    const[filter,setFilter]=useState('');
    const [input,setInput]=useState('')
    const [customerList,setCustomerList]=useState([])
    const selectAfter = (
        <Select 
        optionFilterProp="children"
        defaultValue="noFilter" onSelect={(val)=>{
            setFilter(val)
        }}
        filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            style={{width:150}}>
          <Option value="Name">Vehicle Name</Option>
          <Option value="VIN"> Vehicle ID</Option>
        
          <Option value="noFilter">No Filter </Option>
       
        
        </Select>
      );
    var x=localStorage.getItem('customer')
    const init=()=>{
        loading===true && (<Spinner/>)
        Axios.post("https://carz3330.netlify.app/vehicleNoFilterSearch").then((res)=>{
            console.log(res.data)
            setCustomerList(res.data)
        })
    }
    useEffect(()=>{
        init()
    },[])
    
    return(
        <div>
            
            <Navbar/>
           <Row justify='space-around'>
           <h1  style={{textAlign:"center", color:"#CA0046"}}>Customer Log</h1>
           <Input  addonAfter={selectAfter} onPressEnter={(val)=>{
               if(filter==="VIN"){
                   Axios.post("https://carz3330.netlify.app/vinSearch",{Name:val.target.value}).then((res)=>{
                   console.log(res.data) 
                   setCustomerList(res.data);
                   });
               }
               if(filter==="noFilter"){
                Axios.post("https://carz3330.netlify.app/vehicleNoFilterSearch").then((res)=>{
                    console.log(res.data)
                    setCustomerList(res.data)
                });
               }
               if(filter==="Name"){
                Axios.post("https://carz3330.netlify.app/vehicleNameSearch",{Name:val.target.value}).then((res)=>{
                    console.log(res.data)
                    setCustomerList(res.data)
                });
               }
               if(filter==="Balance"){
                Axios.post("https://carz3330.netlify.app/balanceSearch",{Balance:val.target.value}).then((res)=>{
                    console.log(res.data)
                    setCustomerList(res.data)
                });
               }
               console.log(val.target.value)}} defaultValue="Enter the input text" style={{width:500}}/>
           </Row>
            
            <Row justify="center" gutter={16}>

                <Col lg={16} sm={24}>
                   {customerList.map((customer)=>{
                       return <Row gutter={16} justify={'space-around'}className="bs1 mt-3 text-center">
                                
                                <Col lg={6} sm={24}>
                                    <Row>
                                    <h2><b>{customer.Vehicle}</b></h2>
                                    <p><b>VIN: {customer.VIN}</b></p>
                                    <p className="desc"><i>Category: {customer.Category}</i> </p>                                                                                                                        
                                    <p className='desc'><i>Type: {customer.Type}</i></p>
                                    </Row>
                                    <h3> Customer Name: {customer.CustomerName}</h3>
                                    <p>Start Date: {moment(customer.StartDate).format('YYYY-MM-DD')}</p> 
                                    <p>Return Date:{moment(customer.ReturnDate).format('YYYY-MM-DD')}</p>

                                    {customer.TotalDays<7?<p>Daily Rate: {customer.Daily} </p>:<p>Weekly Rate: {customer.Weekly}</p>}
                                    <p>TotalDays: {customer.TotalDays} </p>
                                    <p>Remaining Amount: ${customer.RemainingBalance}</p>
                                </Col>
                                <Col lg={6} sm={24} className='text-right' style={{ marginTop:28,marginLeft:650, alignItems:"flex-end"}}>
                                    <img style={{borderRadius:5}} src={customer.imagescol}  height="140" className="p-2"/>
                                </Col>
                                    
                                    
                                    
                        
        
                                    
                                                                
                            </Row>
                    }
                   )} 
                </Col>
            </Row>
        </div>
       
          
            
        
    )
}
export default VehicleList