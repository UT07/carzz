import React from 'react';
import styled from 'styled-components';
import { BoxContainer,TopContainer,BackDrop,HeaderContainer,HeaderText} from '../../styles';
export function AccountBox(props){
    return <BoxContainer>
        <TopContainer>
            <BackDrop />
            <HeaderContainer>
                <HeaderText> Welcome</HeaderText>
                <HeaderText> To</HeaderText>
                <HeaderText> Carzz 3330</HeaderText>
            </HeaderContainer>
        </TopContainer>
    </BoxContainer>
}