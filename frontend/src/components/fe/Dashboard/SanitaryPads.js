import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Col, Row, Form, Table, Button, Card } from 'react-bootstrap'
import { Link, useHistory, useParams } from 'react-router-dom'




export default function SanitaryPads(props) {

  const[collection_date, setCollectionDate] = useState("")
  const[last_collected, setLastCollected] = useState("")
  const[served_by, setServedBy] = useState("")
  const[regno, setRegno] = useState("")
  const[pads_collected, setPadsCollected] = useState("")

  const history = useHistory()

  const addPadCollectionDetails = async () =>{
    let formField = new FormData()
    formField.append('collection_date', collection_date)
    formField.append('last_collected', last_collected)
    formField.append('served_by', served_by)
    formField.append('regno', regno)
    formField.append('pads_collected', pads_collected)

    await axios({
      method: 'post',
      url: 'http://localhost:8001/api/padcollection/',
      data: formField
    }).then((response) =>{
      console.log(response.data)
      history.push('/')
    } )
    .catch((error) => {
      // here you will have access to error.response
      console.log(error.response)
    });

  }  
  const [Studentpadcollectionjoin, setStudentpadcollectionjoin] = useState([])
  const fetchStudentpadcollectionjoin = async () =>{
    const results = await axios.get('http://localhost:8001/api/studentpadcollectionjoin/' );
    
    console.log(results.data)
    setStudentpadcollectionjoin(results.data)
   
  }
  useEffect(() =>{
    fetchStudentpadcollectionjoin();
  }, [])
 
  const [student, setStudent] = useState([])

  const {id} = useParams ();
  console.log(id);
  useEffect (() => {
    loadStudent()
  }, [])
  const loadStudent = async () =>{
    const results = await axios.get (`http://localhost:8001/api/students/${id}`);
    
    setStudent(results.data)
  }
  return (
    <div>
      <Row>
      <Col style={{marginLeft:'3rem'}} md={8}>
      <Card style={{marginTop:'1rem'}}>
      <Card.Header style={{backgroundColor: '#3d3635', color: 'white'}}>
        <div className="d-flex justify-content-between align-items-center">
          <h2>{`Pad Collection Details`}</h2>
        </div>
      </Card.Header>
      <Card.Body>
      <Table striped bordered hover  responsive="md" >

<thead>
  <tr>
   
    <th>Registration Number</th>
    <th>First Name</th>
    <th>Last Name</th>
    <th>School</th>
    <th>Collection Date</th>
    <th>Last Collection Date</th>
    <th>Number of Pads Collected</th>
    <th>Served By</th>
  </tr>
</thead>
<>
    {
        Studentpadcollectionjoin.map((student)=>  
        <tbody>
        <tr key={student.id}>
          <td>{student.id}</td>
          <td>{student.first_name}</td>
          <td>{student.last_name}</td>
          <td>{student.school_name}</td>
          <td>{student.collection_date}</td>
          <td>{student.last_collected}</td>
          <td>{student.pads_collected}</td>
          <td>{student.served_by}</td>

          <td >


            </td>
        </tr>
      </tbody>
     
      )}
    </>
</Table> 

      </Card.Body>
      
    </Card>  

      </Col>
        <Col style={{backgroundColor: 'white', marginTop: '1rem', height: '350px'}} md={3}>
          <p style={{fontSize:'1.4em', fontWeight:'500', marginBottom:'1rem', marginTop:'1rem', }} className='mb-3'>Add Pad Collection Details</p>
          <Form>
      <Row className="mb-3">
      <Form.Group as={Col} md="6">
          <Form.Label>Collection Date</Form.Label>
          <Form.Control
            required
            type="date"
            placeholder="Collection Date"
            name='collection_date'
            value={collection_date}
            onChange = {(e) => setCollectionDate(e.target.value)}
          />
        </Form.Group>
        <Form.Group as={Col} md="6">
          <Form.Label>Last Collected</Form.Label>
          <Form.Control
            required
            type="date"
            placeholder="Last Collected"
            name='last_collected'
            value={last_collected}
            onChange = {(e) => setLastCollected(e.target.value)}
          />
        </Form.Group>
          </Row>

          <Row className="mb-1">
        <Form.Group as={Col} md="6">
          <Form.Label>Served By</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Served By"
            name='served_by'
            value={served_by}
            onChange = {(e) => setServedBy(e.target.value)}
          />
        </Form.Group>
        <Form.Group as={Col} md="6">
          <Form.Label>Registration Number</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Registration Number"
            name='regno'
            value={regno}
            onChange = {(e) => setRegno(e.target.value)}
          />
        </Form.Group>
          </Row>  
          <Row className="mb-1">
        <Form.Group as={Col} md="12">
          <Form.Label>Number of Pads Collected</Form.Label>
          <div>
              <select style={{width: '50%'}}
              value={pads_collected}
              onChange={(e) => {
                const numberofpadscollected = e.target.value;
                setPadsCollected(numberofpadscollected)
              }}>
                <option></option>
                <option value='Eight'>Eight</option>
                <option value='Ten'>Ten</option>
                  </select>
                  
    </div>
        </Form.Group>
          </Row> 
          <div style={{marginTop: '15px'}}  className="mb-2">
    <Button as={Link} to={'/'} variant="warning" size="sm">
      Cancel
    </Button>{' '}
    <Button variant="primary" size="sm" onClick={addPadCollectionDetails }>
      Update
    </Button>
  </div>
        </Form>
          </Col>
      </Row>
    </div>
  )
}
