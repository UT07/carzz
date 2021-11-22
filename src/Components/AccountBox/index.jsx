import React from 'react';
import styled from 'styled-components';
const BoxContainer=styled.div`
    width: 280px;
    min-height: 550px;
    display:flex;
    flex-direction:column;
    border-radius: 19px;
    background-color: rgba(255,255,255,100);
    box-shadow: 0 0 2px rgba(15,15,15,0.30);
    position: relative;
    overflow: hidden;
`;
const TopContainer=styled.div`
    width:100%;
    height:250px;
    display:flex;
    flex-direction:column;
    justify-content: flex-end;
    padding:0 1.8em;
    padding-bottom: 5em;
`;
const BackDrop=styled.div`
    width:160%;
    height:600px;
    position:absolute;
    display:flex;
    flex-direction:column;
    border-radius:50%;
    background: rgb(181,77,241);
    background: linear-gradient(90deg, rgba(181,77,241,1) 27%, rgba(0,252,253,0.86) 100%);  
`;
export function AccountBox(props){
    return <BoxContainer>
        <TopContainer>
            <BackDrop />
        </TopContainer>
    </BoxContainer>
}