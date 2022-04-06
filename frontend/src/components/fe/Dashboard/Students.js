import axios from 'axios'
import React, {useState} from 'react'
import { Col, Row, ListGroup, Tab, Form, FormControl, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

export default function Students() {

  const[regno, setRegno] = useState("")
  const[first_name, setFirstName] = useState("")
  const[last_name, setLastName] = useState("")
  const[dob, setDob] = useState("")
  const[dom, setDom] = useState("")
  const[school_name, setSchoolName] = useState("")
  const[grade, setGrade] = useState("")
  const[county, setCounty] = useState("")
  const[constituency, setConstituency] = useState("")
  const[parent_name, setParentName] = useState("")
  const[phoneno, setPhoneNo] = useState("")
  const[photoid, setPhotoid] = useState(null)





  const history = useHistory()

  const addStudentInfo = async () => {

    let formField = new FormData()
    formField.append('first_name', first_name)
    formField.append('last_name', last_name)
    formField.append('dob', dob)
    formField.append('dom', dom)
    formField.append('school_name', school_name)
    formField.append('grade', grade)
    formField.append('county', county)
    formField.append('constituency', constituency)
    formField.append('regno', regno)
    formField.append('parent_name', parent_name)
    formField.append('phoneno', phoneno)
    if (photoid === null){
      formField.append('photoid', photoid)
    }

    await axios({
      method: 'post',
      url: 'http://localhost:8001/api/student-create/',
      data: formField
  
    }).then((response) =>{
      console.log(response.data)
      history.push('/')
      
    })
    .catch((error) => {
      // here you will have access to error.response
      console.log(error.response)
  });
  
  }

  return (
    <div>
      <Row>
        <Col md={2}></Col>
        <Col style={{backgroundColor: 'white', marginTop: '1rem'}} md={8}>
          <p style={{fontSize:'1.4em', fontWeight:'500', marginBottom:'1rem', marginTop:'1rem'}} className='mb-3'>Add Student Details</p>
          <div>
            <nav style={{marginBottom: '1.5rem'}}>
            <Tab.Container  defaultActiveKey="#link1">
               <ListGroup horizontal>
                <ListGroup.Item action href="#link1">
                  Students Details
                </ListGroup.Item>
                <ListGroup.Item action href="#link2">
                  Parents Details
                </ListGroup.Item>
              </ListGroup>
          </Tab.Container>
            </nav>
          </div>

          <Form>
      <Row className="mb-3">
      <Form.Group as={Col} md="4">
          <Form.Label>Registartion Number</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Registration Number"
            name='regno'
            value={regno}
            onChange = {(e) => setRegno(e.target.value)}
          />
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            name='first_name'
            value={first_name}
            onChange = {(e) => setFirstName(e.target.value)}
          />
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            name='last_name'
            value={last_name}
            onChange = {(e) => setLastName(e.target.value)}

          />
        </Form.Group>
          </Row>
          <Row className="mb-3">
        <Form.Group as={Col} md="6">
          <Form.Label>Date of Birth</Form.Label>
          <FormControl 
            required
            type='date'
            placeholder='Date of Birth'
            name='dob'
            value={dob}
            onChange = {(e) => setDob(e.target.value)}
          />
  
        </Form.Group>
        <Form.Group as={Col} md="6">
          <Form.Label>Date of First Menses</Form.Label>
          <Form.Control
             required
             type='date'
             placeholder='Date of Birth'
             name='dom'
             value={dom}
             onChange = {(e) => setDom(e.target.value)}
           
          />
        </Form.Group>
          </Row>
          <Row className="mb-3">
        <Form.Group as={Col} md="4">
          <Form.Label>Name of School</Form.Label>
          <FormControl 
            required
            type='text'
            placeholder='Name of School'
            name='school_name'
            value={school_name}
            onChange = {(e) => setSchoolName(e.target.value)}
          />
        
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Grade</Form.Label>
          <Form.Control
             required
             type='text'
             placeholder='Grade'
             name='grade'
             value={grade}
             onChange = {(e) => setGrade(e.target.value)}
           
          />
        </Form.Group>

        
        
          </Row>
          <Row className="mb-3">
        <Form.Group as={Col} md="6">
          <Form.Label>County</Form.Label>
          <FormControl 
            required
            type='text'
            placeholder='County'
            name='county'
            value={county}
            onChange = {(e) => setCounty(e.target.value)}
          />
        
        </Form.Group>
        <Form.Group as={Col} md="6">
          <Form.Label>Constituency</Form.Label>
          <Form.Control
             required
             type='text'
             placeholder='Constituency'
             name='constituency'
             value={constituency}
             onChange = {(e) => setConstituency(e.target.value)}
          />
        </Form.Group>
          </Row>
          <Row className="mb-3">
          <Form.Group as={Col} md="4">
          <Form.Label>Parent Name</Form.Label>
          <Form.Control
             required
             type='text'
             placeholder='Parent Name'
             name='parent_name'
             value={parent_name}
             onChange = {(e) => setParentName(e.target.value)}
          />
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Phone Number</Form.Label>
          <FormControl 
            required
            type='text'
            placeholder='Phone Number'
            name='phoneno'
            value={phoneno}
            onChange = {(e) => setPhoneNo(e.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} md="4">
          <Form.Label>Upload Photo</Form.Label>
          <Form.Control
             type='file'
             name='photoid'
             onChange = {(e) => setPhotoid(e.target.files[0])}
          />
        </Form.Group>
  
          </Row>
          <div  className="mb-2">
    <Button variant="warning" size="lg">
      Cancel
    </Button>{' '}
    <Button variant="primary" size="lg" onClick={addStudentInfo}>
      Add Student
    </Button>
  </div>
      </Form>      
          </Col>
      </Row>
    </div>
  )
}
