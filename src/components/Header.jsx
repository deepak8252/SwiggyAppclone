import React, { useContext, useState } from 'react';
import Swiigy from "../img/swiigylogo.png"
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { useonline } from './useonline';
import { NavLink } from 'react-router-dom';
import Userdata from '../util/Userdata';

export default function Header() {
  const [openBasic, setOpenBasic] = useState(false);
  const online=useonline();
  const username=useContext(Userdata)
  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid >
        <MDBNavbarBrand>
           <img src={Swiigy} alt="" style={{width:"100px"}} />
        </MDBNavbarBrand>
        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenBasic(!openBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar open={openBasic} >
          <MDBNavbarNav className=''>
          <MDBNavbarItem>
              <MDBNavbarLink >
              <NavLink to='/'>Home</NavLink>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink ><NavLink to='/about'>About</NavLink></MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink >
              <NavLink to='/contact'>Contact</NavLink>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink >cart</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink >staus:{online?"✅":"🔴"}</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink >UserName: {username.name}</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}