import React from "react";
import { BoldLink, BoxContainer2, FormContainer, Input, MutedLink, SubmitButton } from "../../styles";
import {Margin} from '../Margin';
export function LoginForm(props){
    return <BoxContainer2>
        <FormContainer>
            <Input type="tel" placeholder="Enter your phone Number"/>
        </FormContainer>
        <Margin direction="vertical" margin={13}/>
        <SubmitButton type="submit">SignIn</SubmitButton>
        <Margin direction="vertical" margin="1em"/>
        <MutedLink href="#">Can't Sign In?</MutedLink>
        <Margin direction="vertical" margin="1em"/>
        <MutedLink href="#"> Don't have an account? 
            <BoldLink href='#'>SignUp</BoldLink>
        </MutedLink>
    </BoxContainer2>
}