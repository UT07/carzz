import {React,useState} from 'react'
import {Row , Col , Form , Input} from 'antd'
import { Link } from 'react-router-dom'
import {useDispatch , useSelector} from 'react-redux'
import { userRegister } from '../Redux/actions/customerAction'
import { useHistory } from "react-router-dom";
import  Axios  from "axios";
import AOS from 'aos';
import Spinner from '../Components/PageLoader'
import 'aos/dist/aos.css'; 
import Alert from 'react-popup-alert'
AOS.init();
function Register() {
    const [alert,setAlert]=useState('');
    const [nameRegister,setNameRegister]=useState('');
    const [phoneNumberRegister,setPhoneNumberRegister]=useState('');
    const [confirmPhoneNumberRegister,setConfirmPhoneNumberRegister]=useState('');
    const history=useHistory();
    const dispatch = useDispatch();
    const {loading} = useSelector(state=>state.alertsReducer)
    function showAlert(){
        setAlert({
            type:'error',
            text:"Couldn't register. Please enter the details again",
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
    const registerUser=()=>{
        
            Axios.post("http://localhost:3001/signup",
            {   Name:nameRegister,
                Phone:phoneNumberRegister,
                ConfirmPhone:confirmPhoneNumberRegister
            }).then((res)=>
            {
                if(res.data["message"]!=="Phone number not registered"){
                    history.push('/home')
                }
                else{
                    showAlert();
                }
            });

    }
   
    function onFinish(values) {
        dispatch(userRegister(values))
        console.log(values)

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
                    className='w-100'
                    data-aos='slide-right'
                    data-aos-duration='1500'
                    src="https://wallpapercave.com/wp/wp5642488.jpg"/>
                </Col>
                <Col lg={8} className='text-left p-5'>
                    <Form layout='vertical' className='login-form p-7' onFinish={registerUser}>
                         <h1>Login</h1>
                         <hr />
                         <Form.Item name='name' label='Enter your Name' rules={[{required: true}]}>
                             <Input type="tel" onChange={(event)=>{setNameRegister(event.target.value);}}/>
                         </Form.Item>
                         <Form.Item name='phoneNumber' label='Enter your phone number' rules={[{required: true}]}>
                             <Input type="tel" onChange={(event)=>{setPhoneNumberRegister(event.target.value);}}/>
                         </Form.Item>
                         <Form.Item name='confirmPhoneNumber' label='Re-enter your phone number' rules={[{required: true}]}>
                             <Input type="tel" onChange={(event)=>{setConfirmPhoneNumberRegister(event.target.value);}}/>
                         </Form.Item>
                         

                         <button className='btn1 mt-2' onClick={registerUser}>Register</button>

                         <hr />

                         <Link to='/login'>Click Here to Login</Link>
                       

                    </Form>
                </Col>

            </Row>

        </div>
    )
}

export default Register