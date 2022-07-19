
import React, { useEffect, useState } from 'react'
import { Container,Row ,Col,Card,} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './Team.css'
import axios from 'axios';

const Team = () => {

  const [deves,setDeves] = useState([])


  useEffect(() => {
   axios.get('http://localhost:5050/deves').then(res =>{
    setDeves(res.data)
   })
  },[deves]); 

  return (
    <>
    <section className='team'>
        <Container className='my-3'>
          <Row>
            {
              deves.map( data => 
                <Col md={3}>
                <Card className='shadow-sm'>
                    <Card.Img style={{height:'250px',objectFit:'cover'}} src={ data.photo }/>
                    <Card.Body>
                        <h2>{ data.name }</h2>
                        <p>{ data.Call }</p>
                        <Link to={`/Profile/${ data.username }`} className='btn btn-info btn-sm'>View Profile</Link>
                    </Card.Body>
                </Card>
               </Col>
                 )
            }

          </Row>
        </Container>
    </section>
    </>
  )
}

export default Team
