import  Axios from "axios";
import React,{useContext,useState} from "react";
import { BoldLink,BoxContainer,FormContainer,Input,MutedLink,SubmitButton,AccountContext} from "../../styles";
import { Margin } from "../Margin";
export function SignupForm(props){
    const {switchToSignIn}=useContext(AccountContext);
    const [nameRegister,setNameRegister]=useState('');
    const [phoneNumberRegister,setPhoneNumberRegister]=useState('');
    const registerUser=()=>{
        Axios.post("http://localhost:3001/signup",
        {   Name:nameRegister,
            Phone:phoneNumberRegister
        }).then((err)=>
        {
            console.log(err);
        });
    };
return(
    <BoxContainer>
        <FormContainer>
            <Input type="text" onChange={(event)=>{
                setNameRegister(event.target.value);
            }} 
            placeholder="Please enter your Full Name"/>
            <Input type="tel" onChange={(event)=>{
                setPhoneNumberRegister(event.target.value);
            }} placeholder="Enter your Phone Number"/>
            <Input type="tel" placeholder="Confirm your Phone Number"/>
        </FormContainer>
        <Margin direction="vertical" margin={10}/>
        <SubmitButton type="submit" onClick={registerUser}>SignUp</SubmitButton>
        <Margin direction="vertical" margin="1em"/>
        <MutedLink href="#">Already have an account?
            <BoldLink href="#" onClick={switchToSignIn}>SignIn</BoldLink>
        </MutedLink>
    </BoxContainer>
    );
}