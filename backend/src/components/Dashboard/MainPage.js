import React, {useEffect, useState} from 'react'
import "./SideBar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { SideBar } from './SideBar';
import  NavPage from './NavPage';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import {faEye} from "@fortawesome/free-solid-svg-icons";
import axios from "axios"


export default function MainPage() {
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
    <React.Fragment>
      <div className="">
        <div class='w-90 mx-auto p-10 row'>
          <div className='col-0 col-sm-2'><div class="mb-6 mt-4 leftPanel"><div class="py-2 mb-4">
            
          <div class="d-flex flex-column px-2">
  <img src="path/to/logo.png" alt="Logo" style={{maxWidth: "100px; max-height: 100px;"}}></img>
  <hr></hr>
</div>              <SideBar />
              </div></div></div>
              <div  class="col-12 col-sm-10 pt-4">
              <NavPage />
              <Table style={{marginTop: '40px', backgroundColor: 'white'}} striped bordered hover  responsive="md">

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
      } else if (value.first_name.toLowerCase().includes(searchTerm.toLowerCase())){
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
              </div>

          </div>
          </div>
         
          
      </React.Fragment>
  )
}

