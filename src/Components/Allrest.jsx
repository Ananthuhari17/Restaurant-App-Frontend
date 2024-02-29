import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Col, Row } from 'react-bootstrap'
import RestCards from './RestCards'

function Allrest() {

  const base_url = 'https://restaurant-app-backend-dc55.onrender.com/restaurants'
  const [AllrestData, setAllrestData] = useState([]) //to hold the array of restaurant datas 

  const fetchdata = async () => {
    const result = await axios.get(base_url).then(data => data.data)

    setAllrestData(result)
  }

  console.log(AllrestData);//array of data 

  useEffect(() => {
    fetchdata()
  }, [])
  return (
    <div className='container-fluid'>
      <Row>
      
        {AllrestData.map(data => (
          <Col xs={12} sm={6} lg={3} >
            <RestCards restaurents={data}/>
            
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Allrest