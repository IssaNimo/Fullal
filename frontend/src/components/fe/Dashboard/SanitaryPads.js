import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Col, Row, Tab, Form, Table, Button, Card } from 'react-bootstrap'
import { useHistory, useParams, Link } from 'react-router-dom'



export default function SanitaryPads() {

  const[collection_date, setCollectionDate] = useState("")
  const[last_collected, setLastCollected] = useState("")
  const[served_by, setServedBy] = useState("")
  const[regno, setRegno] = useState("")


  const history = useHistory()

  const addPadCollectionDetails = async () =>{
    let formField = new FormData()
    formField.append('collection_date', collection_date)
    formField.append('last_collected', last_collected)
    formField.append('served_by', served_by)
    formField.append('regno', regno)


    await axios({
      method: 'post',
      url: 'http://localhost:8001/api/padcollection-create/',
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
  const [students, setStudents] = useState([])

  const { id } = useParams();

  const getSingelStudent = async () =>{
    const { data } = await axios.get(`http://localhost:8001/api/padcollectionjoin-list/`)
    console.log(data)
    setStudents(data)
  }
  useEffect(() =>{
    getSingelStudent();
  }, )
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
      <Table  responsive="md" >

<thead>
  <tr>
    <th>Registration Number</th>
    <th>First Name</th>
    <th>Last Name</th>
    <th>School</th>
    <th>Collection Date</th>
    <th>Last Collection Date</th>
    <th>Served By</th>
  </tr>
</thead>
<>
    {
        students.map((students)=>  
        <tbody>
        <tr key={students.regno}>
          <td>{students.regno}</td>
          <td>{students.first_name}</td>
          <td>{students.last_name}</td>
          <td>{students.school_name}</td>
          <td>{students.collection_date}</td>
          <td>{students.last_collected}</td>
          <td>{students.served_by}</td>  
        </tr>
      </tbody>
     
      )}
    </>

</Table> 
 
       
      </Card.Body>
    </Card>              
      </Col>
        <Col style={{backgroundColor: 'white', marginTop: '1rem'}} md={3}>
          <p style={{fontSize:'1.4em', fontWeight:'500', marginBottom:'1rem', marginTop:'1rem', }} className='mb-3'>Add Pad Collection Details</p>
          <div>
            <nav style={{marginBottom: '1.5rem'}}>
            <Tab.Container  defaultActiveKey="#link1">

          </Tab.Container>
            </nav>
          </div>
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
          <div  className="mb-2">
    <Button variant="warning" size="sm">
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
