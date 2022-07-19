

import React, { useEffect, useState } from 'react'
import { Container,Row ,Col,Card, Table} from 'react-bootstrap';
import { Link} from 'react-router-dom';
import axios from 'axios';
import './Admin.css';

const Admin = () => {

    const {user,SetUser} = useState([]);
    console.log(user);


    useEffect(() => {
        axios.get('http://localhost:5050/deves').then(res =>{
         SetUser(res.data)
        })
       });
  return (
    <>
    <Container className='my-3'>
        <Row className='justify-content-center'>
            <Col md={ 12 }>
            <Card className='shadow'>
                <Card.Header className='d-flex justify-content-between'>
                <h2>All Developers</h2>
                <Link to={"/add-devs"} variant='info' className='btn btn-info btn-sm'>Add Students</Link>
                </Card.Header>
                <Card.Body>
                    <Table>
                        <thead>
                            <th>#</th>
                            <th>Name</th>
                            <th>Skill</th>
                            <th>Photo</th>
                            <th>Call</th>
                            <th>Action</th>
                        </thead>
                        <tbody>
                                <tr>
                                <td>1</td>
                                <td>Joy Sarker</td>
                                <td>MERN Stack</td>
                                <td><img src="" alt="" /></td>
                                <td>01305851156</td>
                                <td>
                                    <a className='btn btn-sm btn-primary' href=""><i class='bx bx-edit'></i></a>&nbsp;
                                    <a className='btn btn-sm btn-danger' href=""><i class='bx bx-show'></i></a>&nbsp;
                                    <a className='btn btn-sm btn-warning' href=""><i class='bx bx-trash'></i></a>
                                </td>
                                </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Admin