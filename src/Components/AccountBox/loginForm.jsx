import React,{useContext} from "react";
import { BoldLink, BoxContainer2, FormContainer, Input, MutedLink, SubmitButton,AccountContext } from "../../styles";
import {Margin} from '../Margin';
export function LoginForm(props){
    const {switchToSignUp}=useContext(AccountContext);
    
    return( 
    <BoxContainer2>
        <FormContainer>
            <Input type="tel" placeholder="Enter your phone Number"/>
        </FormContainer>
        <Margin direction="vertical" margin={13}/>
        <SubmitButton type="submit">SignIn</SubmitButton>
        <Margin direction="vertical" margin="1em"/>
        <MutedLink href="#">Can't Sign In?</MutedLink>
        <Margin direction="vertical" margin="1em"/>
        <MutedLink href="#"> Don't have an account? 
            <BoldLink href='#' onClick={switchToSignUp}>SignUp</BoldLink>
        </MutedLink>
    </BoxContainer2>
    );
}