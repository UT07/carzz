import axios from "axios";
import { message } from "antd";
export const bookCars=(req)=>async (dispatch)=>{
    dispatch({type:'LOADING',payload:true})
    try{
       await axios.post('https://carz3330.netlify.app/rental')
        dispatch({
            type:'LOADING',
            payload:false
        })
        message.success('Car Booked Successfully')

    }
    catch(err){
        console.log(err);
        message.error('Something Went Wrong! Please Try Again Later')
        dispatch({
            type:'LOADING',
            payload:false
        })
    }
}