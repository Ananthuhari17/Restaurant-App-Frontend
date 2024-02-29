import React from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';


function RestCards({restaurents}) {
  console.log(restaurents);
  return (
    <div >
    
     <MDBCard style={{height:'25rem', width:'80%'}} className='mt-3 text-center'>
    
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
      <Link to={`view/${restaurents.id}`} style={{textDecoration:'none'}}> 
      {/* just above i added link for the image  and this is link to the routes that i seeted already on app.jsx */}
        <MDBCardImage style={{width:"100%",height:'19rem'}} src={restaurents.photograph}/>
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
        </Link>
      </MDBRipple>
      <MDBCardBody >

      <Link to={`view/${restaurents.id}`} style={{textDecoration:'none'}}>
        {/* just above i added the link for the name and description of rest. both are set  to the same path ,
        i just give the path for a reason that i link add to the whole card athil cursorse evide vechalum link  varunnu so for the 
        neatness i jus giving the link tag into 2 places  */}
        <MDBCardTitle style={{color:'chocolate'}}>{restaurents.name} </MDBCardTitle>
        <MDBCardText>
        {restaurents.address}
        </MDBCardText>
        </Link>

      </MDBCardBody>
      
    </MDBCard>
   
    </div>
  )
}

export default RestCards