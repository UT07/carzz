import {message} from 'antd';
import axios from 'axios';
export const getCars=()=>async dispatch=>{
    dispatch({
        type:'LOADING',
        payload:true
    })
    try{
        const response=await axios.get('http://localhost:3001/vehicles')
        dispatch({
            type:'GET_ALL_CARS',
            payload:response.data
        })
        dispatch({
            type:'LOADING',
            payload:false
        })
    }catch(err){
        console.log(err);
        dispatch({
            type:'LOADING',
            payload:false
        })
    }
}