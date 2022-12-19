import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Col, Row, Form, Table, Button, Card } from 'react-bootstrap'
import { Link, useHistory, useParams } from 'react-router-dom'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import 'react-datetime/css/react-datetime.css';




export default function SanitaryPads(props) {

  const[collection_date,  setCollectionDate] = useState("")
  const[served_by, setServedBy] = useState("")
  const[regno, setRegno] = useState("")
  const[pads_collected, setPadsCollected] = useState("")
  const params = useParams()
  const history = useHistory()

  useEffect(()=>{
    getPadDetails()

  },[])// eslint-disable-line react-hooks/exhaustive-deps

const getPadDetails = async () =>{
  // console.warn(params)
  let result = await fetch(`http://localhost:8001/api/students/${params.id}`)
  result = await result.json ()
  // console.warn(result)
  setRegno(result.id)

}
  const addPadCollectionDetails = async () =>{
    let formField = new FormData()
    formField.append('collection_date', collection_date)
    formField.append('served_by', served_by)
    formField.append('regno', regno)
    formField.append('pads_collected', pads_collected)

    await axios({
      method: 'post',
      url: 'http://localhost:8001/api/padcollection/',
      data: formField
    }).then((response) =>{
      console.log(response.data)
      history.push('/home')
    } )
    .catch((error) => {
      // here you will have access to error.response
      console.log(error.response)
    });

  }  
  const {id} = useParams()
  const [student, setStudent] = useState([])
  useEffect(() => {
    loadStudents();
}, []) // eslint-disable-line react-hooks/exhaustive-deps


let loadStudents = async () => {
  const result = await axios.get(`http://localhost:8001/api/students/${id}`);
  // console.warn("result", result)
  console.log(result.data);
  setStudent([result.data])


 }
 const [pad_collection, setPadcollection] = useState([])
 useEffect(() => {
   loadPadcollectiondetails();
  
 }, []) // eslint-disable-line react-hooks/exhaustive-deps

 let loadPadcollectiondetails = async () => {
   const result = await axios.get(`http://localhost:8001/api/students/${id}`);

  //  console.log(result.data.pad_collection);
   setPadcollection(result.data.pad_collection)

 }
 const disableDate = () => {
  const today = new Date();
  const dd = String(today.getDate() + 0).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();
  return yyyy + "-" + mm + "-" + dd;
};

  return (
    
    <div>
      <Row>
      <Col md={2}>  </Col>
      <Col md={8}>  
      <Card>
      <Card.Header style={{backgroundColor: '#3d3635', color: 'white'}}>
        <div >
          <h2>{`Student Pad Collection Details`}</h2>
        </div>
      </Card.Header>
  <Card.Body class="p-0 pt-3">
    <div style={{ display: 'block', width: 1100 }}>
      <Tabs defaultActiveKey="first">
        <Tab eventKey="first" title="Student Details">
          
        <Row>
          
  <Col md={2}> 
  {
                student.map((student, index) => (
                    <Card className="m-3 rounded shadow-lg" style={{ width: '22em', color: 'white' }} bg='dark'>
                    <Card.Body key={student.id}>
                        <Card.Text> Student Name :&nbsp;&nbsp; {student.first_name}&nbsp;&nbsp;{student.last_name} </Card.Text>
                        <Card.Text> Name of School : &nbsp;&nbsp; {student.school_name} </Card.Text>
                        <Card.Text> Class/Grade : &nbsp;&nbsp; {student.grade} </Card.Text>
                        <Card.Text> Date of Birth : &nbsp;&nbsp; {student.dob} </Card.Text>
                    </Card.Body>
                    </Card>
                ))
              }
</Col>
<Col md={2}>  </Col>
<Col md={7}>
  <Table style={{marginTop: '19px'}} striped bordered hover  responsive="md">
  <thead>
      <tr>
        <th>Last Collection Date</th>
        <th>Number of Pads Collected</th>
        <th>Served By</th>

      </tr>
    </thead>
    <>
    {
        pad_collection.map((pad_collection, index)=>  
        <tbody>
        <tr key={pad_collection.id}>
          <td>{pad_collection.collection_date}</td>
          <td>{pad_collection.pads_collected}</td>
          <td>{pad_collection.served_by}</td>
          <td >
            </td>
 
        </tr>
      </tbody>
     
      )}
    </>
  </Table>
</Col>
</Row>        
</Tab>
<Tab eventKey="second" title="Add Pad Collection Details">
<p style={{fontSize:'1.4em', fontWeight:'700', marginLeft: '15px', marginTop: '10px', textAlign: 'center'}} className='mb-3'>Add Student Pad Collection Details</p>

<Form style={{marginLeft: '45px', marginRight: '15px', marginTop: '5px'}}>
      <Row className="mb-3">
      <Form.Group as={Col} md="5">
          <Form.Label>Collection Date</Form.Label>
          <Form.Control
            required
            type="date"
            placeholder="Collection Date"
            name='collection_date'
            value={disableDate()}
            onChange = {(e) => setCollectionDate(e.target.value)}
          />
        </Form.Group>
        
        <Form.Group as={Col} md="5">
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
          <Form.Group as={Col} md="5">
          <Form.Label>Number of Pads Collected</Form.Label>
          <div>
              <select style={{width: '100%'}}
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
        <Form.Group as={Col} md="5">
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
        
        </Tab>
      </Tabs>
    </div>
  </Card.Body>     

</Card>
</Col>
<Col md={2}>  </Col>

      </Row>
    </div>
    
  )
}
