
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './SideBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SideBar } from './SideBar';
import  NavPage from './NavPage';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import {faEye} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [subCounties, setSubCounties] = useState([]);
  const [counts, setCounts] = useState({});
 

  useEffect(() => {
    const fetchSubCounties = async () => {
      const result = await axios.get('http://localhost:8001/api/subcounty/');
      setSubCounties(result.data);

      const countyTypes = subCounties.flatMap(dataItem => [dataItem.subcounty_name])
      .filter((countyType, index, array) => array.indexOf(countyType) === index)
      .sort();

      const newCounts = countyTypes.reduce((acc, countyType) => {
        const count = subCounties.filter(item => item.subcounty_name === countyType).length;
        acc[countyType] = count;
        return acc;
      }, {});

      setCounts(newCounts);
    };
    fetchSubCounties();
  }, [subCounties]);
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
      <section className=''>
        <h1 className='section_title'>
          <span>Number of Girls Registered in Each Sub County</span>
        </h1>
        <div class="row" style={{ gap: '1rem' }}>
          {Object.entries(counts).map(([countyType, count]) => (
            <div class="col-10 mx-auto mx-md- py-4 col-md-4 d-flex align-items-center justify-content-between" style={{ background: ' #564242', borderRadius: ' 15px 50px 30px', padding: '20px', width: '200px', height: '150px', marginTop: '15px' }} key={countyType}>
              <div class="d-flex flex-column justify-content-center">
                <span style={{ fontSize: '2rem', fontWeight: '600' }}><div class="d-flex flex-column justify-content-center">
                  <span style={{ color: 'white' }}>{countyType}</span>
                  <span style={{ fontSize: '2rem', fontWeight: '600', color:'white' }}>
                    <div className='sub_counties' key={countyType}>
                      <p dangerouslySetInnerHTML={{ __html: `<span>${count}</span>` }}></p>
                    </div>
                  </span>
                </div></span>
              </div>
              <i class="fa fa-comments-o fa-3x" style={{ color: 'rgb(169, 169, 169)' }}></i>
            </div>
          ))}
        </div>
      </section>
      <React.Fragment>
      <div className="">
        <div class='w-90 mx-auto p-10 row'>
          <div className='col-0 col-sm-2'><div class="mb-6 mt-4 leftPanel"><div class="py-2 mb-4">
            
          <div class="d-flex flex-column px-2">
  <img className='logo' src={'/logo.png'} alt='avatar'/>
  <hr></hr>
  </div>              
  <SideBar />
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
    </div>
  );
}
