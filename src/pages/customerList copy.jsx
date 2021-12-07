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
          <Option value="VIN">VIN</Option>
          <Option value="Description">Description</Option>
          <Option value="Daily">Balance</Option>
          <Option value="noFilter">No Filter </Option>
        
        </Select>
      );
    var x=localStorage.getItem('customer')
    const init=()=>{
        loading===true && (<Spinner/>)
        Axios.post("http://localhost:3001/vehicleNoFilterSearch").then((res)=>{
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
           <h1  style={{textAlign:"center", color:"#CA0046"}}>Vehicle Log</h1>
           <Input  addonAfter={selectAfter} onPressEnter={(val)=>{
               if(filter==="VIN"){
                   Axios.post("http://localhost:3001/vinSearch",{CustID:val.target.value}).then((res)=>{
                   console.log(res.data) 
                   setCustomerList(res.data);
                   });
               }
               if(filter==="noFilter"){
                Axios.post("http://localhost:3001/vehicleNoFilterSearch").then((res)=>{
                    console.log(res.data)
                    setCustomerList(res.data)
                });
               }
               if(filter==="Balance"){
                Axios.post("http://localhost:3001/DailyBalanceSearch",{Name:val.target.value}).then((res)=>{
                    console.log(res.data)
                    setCustomerList(res.data)
                });
               }
               if(filter==="Description"){
                Axios.post("http://localhost:3001/vehicleNameSearch",{Balance:val.target.value}).then((res)=>{
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
                                
                                    
                                    <p>Name: <b>{customer.Name}</b></p>
                                    <p>CustID:<b><i>{customer.CustID}</i></b></p>
                                    <p>Balance: $<b><u>{customer.Balance}</u></b></p> 
                                    
                                    
                                    
                        
        
                                    
                                                                
                            </Row>
                    }
                   )} 
                </Col>
            </Row>
        </div>
       
          
            
        
    )
}
export default VehicleList;