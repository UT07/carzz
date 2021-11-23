import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarContainer,LeftSection,MiddleSection,RightSection,LinkItems, LinksWrapper, NavLinksContainer } from '../../styles';
import { Logo } from './Logo';
export function Navbar(props){
    return <NavbarContainer>
        <LeftSection>
            <Logo/>
        </LeftSection>
        <MiddleSection>
            <NavLinksContainer>
                <LinksWrapper>
                    <LinkItems>
                        <Link to='/rent'>Check Availability</Link>
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