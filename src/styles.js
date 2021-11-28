import React,{ createContext } from "react";
import styled from "styled-components";



//Margin Components
export const HorizontalMargin = styled.span`
  display: flex;
  width: ${({ margin }) =>
    typeof margin === "string" ? margin : `${margin}px`};
`;

export const VerticalMargin = styled.span`
  margin-top:5px;
  display: flex;
  height: ${({ margin }) =>
    typeof margin === "string" ? margin : `${margin}px`};
`;

//container Components
export const AppContainer=styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@800&family=Oswald:wght@200&family=Pangolin&display=swap');   
    & h1 {
        font-family: "Montserrat", sans-serif;
    }
    & h2 {
        font-family: "Pangolin", sans-serif;
    }
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;
export const BoxContainer=styled.div`
    width: 350px;
    min-height: 750px;
    display:flex;
    flex-direction:column;
    border-radius: 19px;
    background-color: rgba(255,255,255,100);
    box-shadow: 0 0 2px rgba(15,15,15,0.30);
    position: relative;
    top: 0px;
    bottom: 50%;
    left:700px;
    overflow: hidden;
`;
export const TopContainer=styled.div`
    width:100%;
    height:250px;
    display:flex;
    flex-direction:column;
    justify-content: flex-end;
    padding:0 1.8em;
    padding-bottom: 5em;
    margin-top:20px;
`;
export const BoxContainer2=styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:50px;
`;
export const HeaderContainer=styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    margin-top:5px;
`;
export const FormContainer=styled.form`
  width:100%;
  display:flex;
  flex-direction:column;  
  
  box-shadow: 0px 0px 2.5px  rgb(181,77,241);
`;
export const InnerContainer=styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
`;

export const NavbarContainer=styled.div`
    width:100%;
    height:80px;
    box-shadow:0 1px 3px  rgba(15,15,15,0.12);
    display:flex;
    align-items:center;
    padding 0 1.7 em;
`;
export const NavLinksContainer=styled.div`
    height:100%;
    display:flex;
    align-items:center;

`

export const LeftSection=styled.div`
    display:flex;

`;
export const MiddleSection=styled.div`
    display:flex;
    flex:2;
`;
export const RightSection=styled.div`
    display:flex;
`;





export const HeaderText=styled.h2`
    font-size:35px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    line-height:1.24;
    color: rgba(236, 240, 241,1.0);
    z-index:10;
    margin:0;
`;
export const LogoText=styled.h2`
    font-size:35px;
    font-family: 'Montserrat', sans-serif;

    line-height:1.24;
    color:#2c3e50;
    font-weight:750px;
     
`;
export const SmallText=styled.h5`
    color: rgba(236, 240, 241,1.0);
    font-weight: 500;
    font-size:10px;
    font-family: 'Montserrat', sans-serif;
    z-index:10;
    margin: 0;
    margin-top:25px;
`;
export const SmallTextVehicle=styled.h5`
    color: #2c3e50;
    font-weight: 500;
    font-size:10px;
    font-family: 'Montserrat', sans-serif;
    z-index:10;
    margin: 0;
    margin-top:25px;
`;

//Common components used both in login and sign up screen

//Components for links
export const MutedLink=styled.a`
    font-size:13px;
    text-align:center;
    color:rgb(181,77,241);
    font-weight: 700;
    font-family: 'Oswald', sans-serif;
    text-decoration:none;
`;
export const BoldLink=styled.a`
    font-size:13px;
    color: rgba(142, 68, 173,1.0);
    font-weight: 550;
    font-family: 'Oswald', sans-serif;
    text-decoration:none;   
`;
export const LinksWrapper=styled.div` 
    height: 100%
    display:flex;
    margin-left:400px;
    padding:0;
`;
export const LinkItems=styled.li`
    height:100%;
    padding: 0 1.1em;
    color:#2c3e50
    font-size:35px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    line-height:1.24;
    align-items:center;
    justify-content:center;
    list-style-type: none;
    &hover{
       border-top: 2px solid rgb(181,77,241);
    }
`;
export const Link=styled.a`
    text-decoration: none;
    color:inherit;
    font-size:inherit;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    line-height:1.24;
    text-align:center;
    
    &hover{
        color:rgb(181,77,241);
    }
`
//Components for input
export const Input=styled.input`
    border:2px solid rgba(200,200,200,0.0.2);
    padding: 0px 10px;
    border-bottom:1.4px solid transparent;
    width:100%;
    height:45px;
    transition:all 240ms ease-in-out;
    font-size:17px;
    text-align:center;
    outline:none;
    &::placeholder{
        color:rgba(200,200,200,1);
    }
    &:not(:last-of-type){
        border-bottom:1.5px solid rgba(200,200,200,0.4);

    }
    &:focus{
        outline:none;
        border-bottom:3px solid rgb(181,77,241);
     }
`;
//Component for Buttons
export const SubmitButton=styled.button`
     width: 100%;
     padding:12px 40%;
     height:50px;
     color:#fff;
     font-size:15px;
     font-weight:600;
     border:none;
     border-radius: 100px 100px 100px 100px;
     cursor: pointer;
     transition: all,300ms ease-in-out;
     background: rgb(181,77,241);
    background: linear-gradient(60 deg, rgba(181,77,241,1) 27%, rgba(0,252,253,0.86) 100%);  
     &:hover{
         filter:brightness(1.05);
     }
`;

// Components used for context
export const AccountContext=React.createContext();

//Defining device size 
export const DeviceSize={
    mobile:768,
    tablet:992,
    laptop:1324,
};
export const LogoWrapper=styled.div`
    display:flex;
    align-items:center;
`;
export const LogoImage=styled.div`
    width:65px;
    height:70px;
    img{
        width:100%;
        height:100%auto;
        color:rgb(181,77,241);
        font-weight:600;
        font-size:15px;
        align-items:center
    }

`;
