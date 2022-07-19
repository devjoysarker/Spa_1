
import React from 'react'
import { Container,Row ,Col} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './Header.css'
const Header = () => {
  return (
    <>
    <section className='header shadow shadow-sm'>
    <Container>
      <Row>
        <Col md="3">
          <div className="logo">
            <Link to="/"><img src="https://yamaha-motor.com/application/themes/yamaha_motor/public/assets/images/yamaha-motor-logo.png" alt="" /></Link>
          </div>
        </Col>
        <Col md="9">
          <div className="manu">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="admin">Admin</Link></li>
              <li><Link to="/add-devs">Create New Devs</Link></li> 
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
    </section>
    </>
  )
}

export default Header