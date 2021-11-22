import React from 'react';
import styled from 'styled-components';
import { BoxContainer,TopContainer,BackDrop,HeaderContainer,HeaderText, InnerContainer} from '../../styles';
import { LoginForm } from './loginForm';
const SmallText=styled.h5`
    color: rgba(236, 240, 241,1.0);
    font-weight: 500;
    font-size:10px;
    font-family: 'Montserrat', sans-serif;
    z-index:10;
    margin: 0;
    margin-top:25px;
`;
export function AccountBox(props){
    return <BoxContainer>
        <TopContainer>
            <BackDrop />
            <HeaderContainer>
                <HeaderText> Welcome</HeaderText>
                <HeaderText> To</HeaderText>
                <HeaderText> Carzz 3330</HeaderText>
                <SmallText>Sign In to Enter Magical World of Car Rental</SmallText>
            </HeaderContainer>
        </TopContainer> 
        <InnerContainer>
            <LoginForm />
        </InnerContainer>
    </BoxContainer>
}