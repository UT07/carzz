import {React,useState} from 'react'
import {Row , Col , Form , Input, message} from 'antd'
import { Link } from 'react-router-dom'
import {useDispatch , useSelector} from 'react-redux'
import { userLogin } from '../Redux/actions/customerAction'
import { useHistory } from "react-router-dom"; 
import AOS from 'aos';
import Spinner from '../Components/PageLoader'
import 'aos/dist/aos.css'; 
import Axios from "axios";

import Alert from 'react-popup-alert'
AOS.init();
function Login() {
    const [alert,setAlert]=useState('');
    const [phoneNumber,setPhoneNumber]=useState('');
    const history=useHistory();
    const dispatch = useDispatch()
    const {loading} = useSelector(state=>state.alertsReducer)
    function onFinish(values) {
        dispatch(userLogin(values))
        console.log(values)
    
    }
    function showAlert(){
        setAlert({
            type:'error',
            text:"Couldn't login. Please enter the phone number again",
            show:true
        })
    }
    function onCloseAlert() {
        setAlert({
          type: '',
          text: '',
          show: false
        })
      }
    const loginUser=()=>{
        if(!isNaN(parseInt(phoneNumber))){
            Axios.post("https://carz3330.netlify.app/login",
            {
                Phone:phoneNumber
            }).then((res)=>
            {
                if(res.data["message"]!="Couldn't log in"){
                    localStorage.setItem('customer',JSON.stringify(res.data))
                    
                    history.push('/home')
                }
                else{
                    showAlert();
                }
            
            });
        };
    }    
    return (
        <div className='login'>
            {loading && (<Spinner />)}
            <Alert header={"Couldn't log in"} btnText={'Try Again!'} text={alert.text} type={alert.type}  show={alert.show}  onClosePress={onCloseAlert}
        pressCloseOnOutsideClick={true}
        showBorderBottom={true} alertStyles={{}}
        headerStyles={{}}
        textStyles={{}}
        buttonStyles={{}}/>
            <Row gutter={16} className='d-flex align-items-center' >

                <Col lg={16} style={{position: 'relative'}}>
                    <img 
                    className='w-100 loginImage'
                    data-aos='slide-right'
                    data-aos-duration='1500'
                    src="https://wallpapercave.com/wp/wp5642488.jpg"/>
                </Col>
                <Col lg={8} className='text-left p-5'>
                    <Form layout='vertical' className='login-form p-5' onFinish={loginUser}>
                         <h1>Login</h1>
                         <hr />
                         <Form.Item name='phoneNumber' label='Enter your phone number' rules={[{required: true}]}>
                             <Input type="tel" onChange={(event)=>{
                                 setPhoneNumber(event.target.value);
                             }}/>
                         </Form.Item>
                         

                         <button className='btn1 mt-2' onClick={loginUser}>Login</button>

                         <hr />

                         <Link to='/signup'>Click Here to Register</Link>
                       

                    </Form>
                </Col>

            </Row>

        </div>
    )
}

export default Login