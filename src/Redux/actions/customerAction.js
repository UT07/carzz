import axios from "axios";
import { message } from "antd";
export const userLogin=(request)=>async dispatch=>{
    dispatch({
        type:'LOADING',
        payload:true
    })
    try{
        const response=await axios.post('http://localhost:3001/vehicles',request)
        localStorage.setItem('customer',JSON.stringify(response.data))
        message.success('Login Successful')
        dispatch({
            type:'LOADING',
            payload:false
        })
    }catch(err){
        console.log(err);
        message.error('Login Unsuccessful')
        dispatch({
            type:'LOADING',
            payload:false
        })
    }
}
export const userRegister=(request)=>async dispatch=>{
    dispatch({
        type:'LOADING',
        payload:true
    })
    try{
        const response=await axios.post('http://localhost:3001/vehicles',request)
        localStorage.setItem('customer',JSON.stringify(response.data))
        message.success('Registration Successful')
        dispatch({
            type:'LOADING',
            payload:false
        })
    }catch(err){
        console.log(err);
        message.error('Registration Unsuccessful')
        dispatch({
            type:'LOADING',
            payload:false
        })
    }
}