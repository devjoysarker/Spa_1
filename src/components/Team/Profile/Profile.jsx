
import React, { useEffect, useState } from 'react'
import './Profile.css'
import { Container,Row ,Col,Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
const Profile = () => {

  // Get user params
  const { username } = useParams();

  //deves singal profile data

  const [ profile,setProfile ] = useState({
    name : '',
    skill : '',
    call : '',
    photo : '',
    id : '',
    email : ''
  })

  useEffect(() => {
    axios.get(`http://localhost:5050/deves?username=${ username }`).then(res => {
      setProfile({
        ...res.data[0]
      })
    })
  })

  
  return (
    <>
    <Container className='my-3'>
        <Row className='justify-content-center'>
            <Col md={ 6 }>
            <Card className='shadow'>
                <Card.Body>
               <div className="profile">
               <img src={profile.photo} alt="" />
               <h2>{profile.name}</h2>
               <p>{ profile.email }</p>
               <span className='skill'>{profile.skill}</span>
               <div className="social-icon">
                <ul>
                    <li><a href="#"><i class='bx bxl-facebook-circle' ></i></a></li>
                    <li><a href="#"><i class='bx bxl-twitter' ></i></a></li>
                    <li><a href="#"><i class='bx bxl-instagram' ></i></a></li>
                    <li><a href="#"><i class='bx bxl-linkedin' ></i></a></li>
                </ul>
               </div>
               </div>
                </Card.Body>
                <Card.Footer>
                  <Link className='btn btn-sm btn-warning' to="/">All Deves</Link>
                </Card.Footer>
            </Card>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Profile;