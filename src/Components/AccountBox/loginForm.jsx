import React,{useContext,useState} from "react";
import { BoldLink, BoxContainer2, FormContainer, Input, MutedLink, SmallText,SubmitButton,AccountContext } from "../../styles";
import {Margin} from '../Margin';
import Axios from "axios";
export function LoginForm(props){
    const {switchToSignUp}=useContext(AccountContext);
    const [phoneNumber,setPhoneNumber]=useState('');
    const loginUser=()=>{
        if (phoneNumber!==NaN){
            Axios.post("http://localhost:3001/login",
        {
            Phone:phoneNumber
            
        }).then((err)=>
        {
            console.log(err);
        });    
        }
        
    };
    return( 
    <BoxContainer2>
        <FormContainer>
            <Input type="text"  onChange={(event)=>{
                setPhoneNumber(event.target.value);
            }} placeholder="Enter your phone Number"/>
        </FormContainer>
        <Margin direction="vertical" margin={13}/>
        <SubmitButton type="submit" onClick={loginUser} >SignIn</SubmitButton>
        <Margin direction="vertical" margin="1em"/>
        <MutedLink href="#">Can't Sign In?</MutedLink>
        <Margin direction="vertical" margin="1em"/>
        <MutedLink href="#"> Don't have an account? 
            <BoldLink href='#' onClick={switchToSignUp}>SignUp</BoldLink>
        </MutedLink>
    </BoxContainer2>
    );
}