import React from 'react';
import { Link,NavLink } from 'react-router-dom';
import { NavbarContainer,LeftSection,MiddleSection,RightSection,LinkItems, LinksWrapper, NavLinksContainer } from '../../styles';
import { Logo } from './Logo';
export function Navbar(props){
    return <NavbarContainer>
        <LeftSection>
            <NavLink to='/home'>
                <Logo/> 
            </NavLink>    
        </LeftSection>
        <MiddleSection>
            <NavLinksContainer>
                <LinksWrapper>
                    <LinkItems>
                        <Link to='/rent'>Edit Profile</Link>
                    </LinkItems>
                </LinksWrapper>
            </NavLinksContainer>
            <NavLinksContainer>
                <LinksWrapper>
                    <LinkItems>
                        <Link to='/rent'>Return a Car</Link>
                    </LinkItems>
                </LinksWrapper>
            </NavLinksContainer>
        </MiddleSection>
        <RightSection>
            <NavLinksContainer>
                    <LinksWrapper>
                        <LinkItems>
                            <Link to='/'>Sign Out</Link>
                        </LinkItems>
                    </LinksWrapper>
                </NavLinksContainer>
        </RightSection>

    </NavbarContainer>
}