import React, {useEffect, useState} from 'react'
import {Link, useParams} from "react-router-dom";
import axios from "axios"

import {Card, Button, Table, Row, Col, FormControl, Form} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faPlus} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [students, setStudents] = useState([])
  const[searchTerm, setSearchTerm] = useState('')


  const fetchStudents = async () => {
      const result = await axios.get('http://localhost:8001/api/students/');

      console.log(result.data)
      setStudents(result.data)
  }

  useEffect(() => {
      fetchStudents();
  }, [])


  return (
    <div> 
    <Row>
      <Col md={2}>  </Col>
      <Col md={8}>  
            <Card >
      <Card.Header style={{backgroundColor: '#3d3635', color: 'white'}}>
        <div >
          <h2>{`Student Details`}</h2>
        </div>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col md={6}>
      <Button as={Link} variant="dark" to={'/students'}>
            <FontAwesomeIcon icon={faPlus}/>
            &nbsp;{`Add Student`}
          </Button>
          </Col>
          <Col md={2}>  </Col>
          <Col md={4}>
          <Form className="d-flex">
        <FormControl 
          type="search"
          onChange={(e) =>{
            setSearchTerm(e.target.value)
          }}
          placeholder="Search"
          className="me-8"
          aria-label="Search"
        />
        <Button variant="dark">Search</Button>
      </Form>
      </Col>
      </Row>
      <Table style={{marginTop: '20px'}} striped bordered hover  responsive="md">

    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Date of Birth</th>
        <th>School Name</th>
        <th>Grade</th>
        <th>View</th>

      </tr>
    </thead>
    <>
    {
        students.filter((value) => {
          if(searchTerm === ""){
            return value
          } else if (value.regno.toLowerCase().includes(searchTerm.toLowerCase())){
            return value
          }
        })
        .map((student, index)=>  
        <tbody>
        <tr key={student.id}>
          <td>{student.id}</td>
          <td>{student.first_name}</td>
          <td>{student.last_name}</td>
          <td>{student.dob}</td>
          <td>{student.school_name}</td>
          <td>{student.grade}</td>
          <td >
          <Link className="btn btn-outline-primary mr-2" to={`/sanitary-Pads/${student.id}`}> <FontAwesomeIcon icon={faEye}/></Link>
            </td>
 
        </tr>
      </tbody>
     
      )}
    </>
  
  </Table>   
      </Card.Body>
    </Card>              
    </Col>
    <Col md={2}></Col>
    </Row>
    
    </div>
  )
}
