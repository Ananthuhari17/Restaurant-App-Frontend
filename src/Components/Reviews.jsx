import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';


import {
    MDBCard,
    MDBCardHeader,
    MDBCardBody,
    MDBTypography
} from 'mdb-react-ui-kit';

function Reviews({ reviews }) {
    console.log(reviews);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div><Button style={{ color: 'chocolate' }} className=' w-100  ' variant="outline-light" onClick={handleShow}>
            Reviews
        </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title style={{ color: 'chocolate' }} className='w-100 text-center '>Reviews</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>

                    {reviews?.map(data=>(
                        <MDBCard className='m-2 '>
                     
                        <MDBCardBody>
                           
                            <MDBTypography blockquote className='mb-0'>
                                <p><small >{data?.comments}</small></p>
                                <footer className='blockquote-footer'><cite title='Source Title'> {data.name } </cite>
                                    <p className='mt-1' style={{float:'right'}}> <small> {data.date}</small></p>
                                </footer>
                                
                            </MDBTypography>
                            <MDBCardHeader style={{color:'chocolate', backgroundColor:'white' ,opacity: '0.8', borderRadius:'10px' ,margin:'1rem'}}>Rating : {data.rating}</MDBCardHeader>
                        </MDBCardBody>
                        
                        
                    </MDBCard>
                    ))}

                </Offcanvas.Body>
            </Offcanvas></div>
    )
}

export default Reviews