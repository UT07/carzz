import React from 'react';
import { Link,NavLink } from 'react-router-dom';
import { NavbarContainer,LeftSection,MiddleSection,RightSection,LinkItems, LinksWrapper, NavLinksContainer } from '../../styles';
import { Logo } from './Logo';
import { Menu, Dropdown, Button, Space , Row , Col } from "antd";
export function Navbar(props){
    const user = JSON.parse(localStorage.getItem('customer'))
    
    const menu = (
      <Menu>
          <Menu.Item>
        <a
         
          href="/home"
        >
          Home
        </a>
      </Menu.Item>
        <Menu.Item>
          <a
            
            href="/booking"
          >
            Bookings
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
           
            href="/admin"
          >
            Admin
          </a>
        </Menu.Item>
        <Menu.Item onClick={()=>{
            localStorage.removeItem('customer');
            window.location.href='/'
        }}>
            <li style={{color:"#CA0046"}}>Logout</li>
        </Menu.Item>
      </Menu>
    );
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
                        <Link to='/returnCar'>Return a Car</Link>
                    </LinkItems>
                </LinksWrapper>
            </NavLinksContainer>
        </MiddleSection>
        <RightSection>
            <NavLinksContainer>
                <Dropdown overlay={menu} placement="bottomRight" >
                    <Button>{user[0].Name}</Button>
                </Dropdown>
            </NavLinksContainer> 
        </RightSection>

    </NavbarContainer>
}