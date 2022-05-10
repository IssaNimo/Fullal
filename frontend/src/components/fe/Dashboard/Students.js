import axios from 'axios'
import React, {useState} from 'react'
import { Col, Row, Form, FormControl, Button } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'

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
  const[location, setLocation] = useState("")
  const[sub_location, setSubLocation] = useState("")
  const[village, setVillage] = useState("")
  const[mothers_name, setMothersName] = useState("")
  const[fathers_name, setFathers] = useState("")
  const[phone_number, setPhoneNumber] = useState("")
  const[area_chief, setAreaChief] = useState("")
  const[chief_phoneno, setChiefPhoneNo] = useState("")
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
    formField.append('phone_number', phone_number)
    formField.append('location', location)
    formField.append('sub_location', sub_location)
    formField.append('village', village)
    formField.append('mothers_name', mothers_name)
    formField.append('fathers_name', fathers_name)
    formField.append('area_chief', area_chief)
    formField.append('chief_phoneno', chief_phoneno)
    if (photoid === null){
      formField.append('photoid', photoid)
    }

    await axios({
      method: 'post',
      url: 'http://localhost:8001/api/students/',
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

        <Form.Group as={Col} md="4">
          <Form.Label>Upload Photo</Form.Label>
          <Form.Control
             type='file'
             name='photoid'
             onChange = {(e) => setPhotoid(e.target.files[0])}
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
          <Form.Label>Location</Form.Label>
          <Form.Control
             required
             type='text'
             placeholder='Location'
             name='location'
             value={location}
             onChange = {(e) => setLocation(e.target.value)}
           
          />
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Sub Location</Form.Label>
          <FormControl 
            required
            type='text'
            placeholder='Sub Location'
            name='sub_location'
            value={sub_location}
            onChange = {(e) => setSubLocation(e.target.value)}
          />
  
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Village</Form.Label>
          <Form.Control
             required
             type='text'
             placeholder='Village'
             name='village'
             value={village}
             onChange = {(e) => setVillage(e.target.value)}
           
          />
        </Form.Group>
       
          </Row>
          <Row className="mb-3">
        <Form.Group as={Col} md="6">
          <Form.Label>Area Chief</Form.Label>
          <FormControl 
            required
            type='text'
            placeholder='Area Chief'
            name='area_chief'
            value={area_chief}
            onChange = {(e) => setAreaChief(e.target.value)}
          />
  
        </Form.Group>
        <Form.Group as={Col} md="6">
          <Form.Label>Chief's Phone Number</Form.Label>
          <Form.Control
             required
             type='text'
             placeholder='Chief Phone Number'
             name='chief_phoneno'
             value={chief_phoneno}
             onChange = {(e) => setChiefPhoneNo(e.target.value)}
           
          />
        </Form.Group>
          </Row>
          <Row className="mb-3">
          <Form.Group as={Col} md="4">
          <Form.Label>Mother's Name</Form.Label>
          <Form.Control
             required
             type='text'
             placeholder='Mother Name'
             name='mothers_name'
             value={mothers_name}
             onChange = {(e) => setMothersName(e.target.value)}
          />
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Fathers's Name</Form.Label>
          <Form.Control
             required
             type='text'
             placeholder='Father Name'
             name='fathers_name'
             value={fathers_name}
             onChange = {(e) => setFathers(e.target.value)}
          />
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Phone Number</Form.Label>
          <FormControl 
            required
            type='text'
            placeholder='Phone Number'
            name='phone_number'
            value={phone_number}
            onChange = {(e) => setPhoneNumber(e.target.value)}
          />
        </Form.Group>
       </Row>
       
          <div  className="mb-2">
    <Button as={Link} to={'/'} variant="warning" size="lg">
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
