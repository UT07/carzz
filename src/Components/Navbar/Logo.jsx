import React from "react";
import { LogoWrapper,LogoImage,LogoText } from "../../styles";
import logo_img from  '../../assets/images/logo_image.jpg';
export function Logo(props){
    return <LogoWrapper>
        <LogoImage>
            <img src={logo_img} alt="Carzz 3330 logo"/>
        </LogoImage>
        <LogoText>Carzz 3330</LogoText>
    </LogoWrapper>
}