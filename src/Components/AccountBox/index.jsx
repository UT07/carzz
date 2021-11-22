import React, { useState } from 'react';
import styled from 'styled-components';
import { BoxContainer,TopContainer,HeaderContainer,HeaderText, SmallText,InnerContainer, AccountContext} from '../../styles';
import { LoginForm } from './loginForm';
import { SignupForm } from './signUpForm';
import { motion } from "framer-motion";
const BackDrop=styled(motion.div)`
    width:160%;
    height:600px;
    position:absolute;
    display:flex;
    flex-direction:column;
    border-radius:50%;
    transform:rotate(75deg);
    top: -320px;
    left: -70px;
    background: rgb(181,77,241);
    background: linear-gradient(60deg, rgba(181,77,241,1) 27%, rgba(0,252,253,0.86) 100%);  
`;

const backdropVariants={
    expanded:{
        width: "233%",
        height:"1000px",
        borderRadius:"25%",
        transform:"rotate(75deg)",
    },
    collapsed:{
        width:"160%",
        height:"600px",
        borderRadius:"50%",
        transform:"rotate(75deg)",
    },
}
const expandingTransition={
    type:"spring",
    duration:3.0,
    stiffness:30,
}
export function AccountBox(props){
    const[isExpanded,setExpanded]=useState(false);
    const [active,setActive]=useState("signin");
    const playExpandingAnimation=()=>{
        setExpanded(true);
        setTimeout(()=>{
            setExpanded(false);
        },expandingTransition.duration*1000-1000);
    };
    const switchToSignUp=()=>{
        playExpandingAnimation();
        setTimeout(()=>{
            setActive("signup");    
        },500);
    }
    const switchToSignIn=()=>{
        playExpandingAnimation();
        setTimeout(()=>{
            setActive("signin");    
        },500);
    }
    const contextValue={switchToSignUp,switchToSignIn};
    return (
        <AccountContext.Provider value={contextValue}>
    <BoxContainer>
        <TopContainer>
            <BackDrop initial={false} animate={isExpanded?"expanded":"collapsed"}variants={backdropVariants} transition={expandingTransition}/>
            {active==="signin" &&<HeaderContainer>
                <HeaderText> Welcome</HeaderText>
                <HeaderText>To</HeaderText>
                <HeaderText> Carzz 3330</HeaderText>
                <SmallText>Sign In to Enter Magical World of Car Rental</SmallText>
            </HeaderContainer>}
            {active==="signup" &&<HeaderContainer>
                <HeaderText> Create</HeaderText>
                <HeaderText>Account at</HeaderText>
                <HeaderText> Carzz 3330</HeaderText>
                <SmallText> Please Sign Up to Enter Magical World of Car Rental</SmallText>
            </HeaderContainer>}
        </TopContainer> 
        <InnerContainer>
            {
                active==="signin" && <LoginForm/>
            }
            {
                active==="signup" && <SignupForm />
            }
        </InnerContainer>
    </BoxContainer>
    </AccountContext.Provider>
    )}