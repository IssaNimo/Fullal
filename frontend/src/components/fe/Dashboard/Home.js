import React, {useEffect, useState} from 'react'
import {Link, useParams} from "react-router-dom";
import axios from "axios"

import {Card, Button, Table, Row, Col} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faPlus} from "@fortawesome/free-solid-svg-icons";

export default function Home() {

  const [students, setStudents] = useState([])

  const fetchStudents = async () => {
      const result = await axios.get('http://localhost:8001/api/student-list/');

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
            <Card>
      <Card.Header style={{backgroundColor: '#3d3635', color: 'white'}}>
        <div className="d-flex justify-content-between align-items-center">
          <h2>{`Student Details`}</h2>
          <Button as={Link} variant="light" to="/students">
            <FontAwesomeIcon icon={faPlus}/>
            &nbsp;{`Add Student`}
          </Button>
        </div>
      </Card.Header>
      <Card.Body>
      <Table  responsive="md">

    <thead>
      <tr>
        <th>#</th>
        <th>Registartion Number</th>
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
        students.map((student)=>  
        <tbody>
        <tr key={student.id}>
          <td>{student.id}</td>
          <td>{student.regno}</td>
          <td>{student.first_name}</td>
          <td>{student.last_name}</td>
          <td>{student.dob}</td>
          <td>{student.school_name}</td>
          <td>{student.grade}</td>
          <td >
          <Link className="btn btn-outline-primary mr-2" to={`sanitary-Pads/`}> <FontAwesomeIcon icon={faEye}/></Link>
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
