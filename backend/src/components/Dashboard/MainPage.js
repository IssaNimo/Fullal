import React from 'react'
import "./SideBar.css"
import { Col, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { SideBar } from './SideBar';
import  NavPage from './NavPage';



export default function MainPage() {
  return (
    <React.Fragment>
      <section>
        <div className='header'>
          <img className='logo' src={'/logo.png'} alt='avatar'/>
        </div>
        </section>
        <div>
          <Row className='mb-3'>
            <Col md={2} className="side1">
              <SideBar />
            </Col>
            <Col md={10} className="side2">
              <NavPage />
            </Col>
          </Row>
          </div>
      </React.Fragment>
  )
}
