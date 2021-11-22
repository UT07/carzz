import styled from "styled-components";


export const AppContainer=styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap');   
    @import url("https://fonts.googleapis.com/css2?family=Pangolin&display=swap");
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
export const TopContainer=styled.div`
    width:100%;
    height:250px;
    display:flex;
    flex-direction:column;
    justify-content: flex-end;
    padding:0 1.8em;
    padding-bottom: 5em;
`;
export const BackDrop=styled.div`
    width:160%;
    height:600px;
    position:absolute;
    display:flex;
    flex-direction:column;
    border-radius:50%;
    top: -300px;
    left: -70px;
    background: rgb(181,77,241);
    background: linear-gradient(90deg, rgba(181,77,241,1) 27%, rgba(0,252,253,0.86) 100%);  
`;
export const HeaderContainer=styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
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
