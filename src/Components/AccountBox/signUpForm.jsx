import React,{useContext} from "react";
import { BoldLink,BoxContainer,FormContainer,Input,MutedLink,SubmitButton,AccountContext} from "../../styles";
import { Margin } from "../Margin";
export function SignupForm(props){
    const {switchToSignIn}=useContext(AccountContext);
return(
    <BoxContainer>
        <FormContainer>
            <Input type="text" placeholder="Please enter your Full Name"/>
            <Input type="tel" placeholder="Enter your Phone Number"/>
            <Input type="tel" placeholder="Confirm your Phone Number"/>
        </FormContainer>
        <Margin direction="vertical" margin={10}/>
        <SubmitButton type="submit">SignUp</SubmitButton>
        <Margin direction="vertical" margin="1em"/>
        <MutedLink href="#">Already have an account?
            <BoldLink href="#" onClick={switchToSignIn}>SignIn</BoldLink>
        </MutedLink>
    </BoxContainer>
    );
}