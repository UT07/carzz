import  Axios from "axios";
import React,{useContext,useState} from "react";
import { useHistory } from "react-router-dom";
import { BoldLink,BoxContainer2,FormContainer,Input,MutedLink,SubmitButton,AccountContext} from "../../styles";
import { Margin } from "../Margin";
export function SignupForm(props){
    const {switchToSignIn}=useContext(AccountContext);
    const [nameRegister,setNameRegister]=useState('');
    const [phoneNumberRegister,setPhoneNumberRegister]=useState('');
    const [confirmPhoneNumberRegister,setConfirmPhoneNumberRegister]=useState('');
    const history=useHistory();
    const registerUser=()=>{
        if(!isNaN(phoneNumberRegister)&& !isNaN(confirmPhoneNumberRegister) && !isNaN(nameRegister)){
            Axios.post("https://carz3330.netlify.app/signup",
            {   Name:nameRegister,
                Phone:phoneNumberRegister,
                ConfirmPhone:confirmPhoneNumberRegister
            }).then(()=>
            {
             history.push({pathname:'/home',state:{ update: true },});
            });
        }
    }
    
    
return(
    <BoxContainer2>
        <FormContainer>
            <Input type="text" onChange={(event)=>{
                setNameRegister(event.target.value);
            }} 
            placeholder="Please enter your Full Name"/>
            <Input type="text" onChange={(event)=>{
                setPhoneNumberRegister(event.target.value);
            }} placeholder="Enter your Phone Number"/>
            <Input type="text" onChange={(event)=>{
                setConfirmPhoneNumberRegister(event.target.value);
            }} placeholder="Confirm your Phone Number"/>
        </FormContainer>
        <Margin direction="vertical" margin={10}/>
        <SubmitButton type="submit" onClick={()=>{registerUser();switchToSignIn();}}>SignUp</SubmitButton>
        <Margin direction="vertical" margin="1em"/>
        <MutedLink href="#">Already have an account?
            <BoldLink href="#" onClick={switchToSignIn}>SignIn</BoldLink>
        </MutedLink>
    </BoxContainer2>
    );
}