import React from 'react'

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
 <MDBNavbar light bgColor='dark' >
        <MDBContainer fluid>
          <MDBNavbarBrand href='/'>
          <i className="fa-solid fa-utensils fa-bounce fa-xl mx-2 " style={{color: 'chocolate'}} ></i>
          <h2 style={{color:'chocolate'}}>RestoCafe</h2>
           
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header