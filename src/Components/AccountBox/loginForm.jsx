import React,{useContext,useState} from "react";
import { useHistory } from "react-router-dom"; 
import { useForm } from "react-hook-form";
import { BoldLink, BoxContainer2, FormContainer, Input, MutedLink, SubmitButton,AccountContext } from "../../styles";
import {Margin} from '../Margin';
import Axios from "axios";
export function LoginForm(props){
    const {switchToSignUp}=useContext(AccountContext);
    const [phoneNumber,setPhoneNumber]=useState('');
    const history=useHistory();
    const loginUser=()=>{
        if(!isNaN(phoneNumber)){
            Axios.post("https://carz3330.netlify.app/login",
            {
                Phone:phoneNumber
            }).then(()=>
            {
            history.push('/home')
            
            });
        };
    }    
    return( 
    <BoxContainer2>
        <FormContainer>
            <Input type="tel"  onChange={(event)=>{
                setPhoneNumber(event.target.value);
            }} placeholder="Enter your phone Number"/>
        </FormContainer>
        <Margin direction="vertical" margin={13}/>
        <SubmitButton type="submit" onClick={loginUser} >SignIn</SubmitButton>
        <Margin direction="vertical" margin="1em"/>
        <MutedLink href="#"> Don't have an account? 
            <BoldLink href='#' onClick={switchToSignUp}>SignUp</BoldLink>
        </MutedLink>
    </BoxContainer2>
    );
}