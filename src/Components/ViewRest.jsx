import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import OpTime from './OpTime';
import Reviews from './Reviews';

function ViewRest() {

 const [AllViewData,setAllViewData]=useState([])
  // const Paraid = useParams()//using to get the path parameter from url. here its id of restaurant.
  // console.log(Paraid.id);// we get the object here and it includes the id with in .
  // const k= Paraid.id; without destructuring gettin g the value of id .
  // console.log(k);
  const {id}=useParams();// here i destructured the paraid so we get the paraid.id into id by destructuring .
  console.log(id);
  const base_url = 'https://restaurant-app-backend-dc55.onrender.com/restaurants'
  //API call to get details of the particular restaurant that we clicked with the id .
  const fetchdata=async()=>{
    const result=await axios.get(base_url+"/"+id).then(data=>data.data)
    console.log(result);
    setAllViewData(result);
  }
  useEffect(()=>{
    fetchdata()
  },[])


  return (
    <div className='container-fluid'>
     
      <Row >
      <Col xs={12} lg={6} className="d-flex justify-content-center  " >
     <img src={AllViewData.photograph} alt="image loading**"  style={{height:'64vh'}} className='mt-3' />
      </Col>

      <Col xs={12} lg={6}  className="d-flex justify-content-center mt-3" >
      <div style={{justifyContent:'center',display:'flex'}}>
      
        <ListGroup  style={{width:'30rem',justifyContent:'center',display:'flex'}}>
      <ListGroup.Item className='text-center' style={{color:'chocolate'}} ><h1>{AllViewData.name}</h1></ListGroup.Item>
      <ListGroup.Item style={{color:'chocolate'}}>Address : {AllViewData.address}</ListGroup.Item>
      <ListGroup.Item style={{color:'chocolate'}}>Cuisine Type : {AllViewData.cuisine_type}</ListGroup.Item>
      <ListGroup.Item style={{color:'chocolate'}}><OpTime Optime={AllViewData.operating_hours}/> </ListGroup.Item>
      <ListGroup.Item style={{color:'chocolate'}}> <Reviews reviews={AllViewData.reviews}/> </ListGroup.Item>
    </ListGroup>
      </div>
      </Col>
     </Row>
    
     
    </div>
  )
}

export default ViewRest