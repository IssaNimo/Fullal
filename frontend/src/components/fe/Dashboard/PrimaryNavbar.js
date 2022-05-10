import React from 'react'
import './primary_nav.css';
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import {Nav, Navbar, Container, Form, Button, FormControl} from 'react-bootstrap'
import { BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faFemale, faCalendar} from "@fortawesome/free-solid-svg-icons";

import Students from './Students'
import SanitaryPads from './SanitaryPads'
import Home from './Home';

export default function primaryNavbar() {
  return (
    <Router>
    <div>
      <Navbar fixed expand="lg" className="primaryNavBar">
  <Container>
    <Navbar.Brand href="/">
    <img  className='logo' src={'/logo.png'} alt="avatar"/>
      </Navbar.Brand>
    <Navbar.Collapse id="navbarScroll">

      <Nav className="m-auto">
      
        <Nav.Link as={Link} to={"/home"}>
        <FontAwesomeIcon icon={faHome}/>
        &nbsp;&nbsp;{`Dashboard`}
        </Nav.Link>
        <Nav.Link as={Link} to={"/students"}>
        <FontAwesomeIcon icon={faFemale}/>
        &nbsp;&nbsp;{`Students`}
        </Nav.Link>       
        <Nav.Link  as={Link} to={"/sanitary-pads"}>
        <FontAwesomeIcon icon={faCalendar}/>
        &nbsp;&nbsp;{`Sanitary Pads`}
        </Nav.Link>
      
      </Nav>
      <Form style={{marginRight:'-150px'}} className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-light">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
    <Switch>
          <Route path="/students">
            <Students />
          </Route>
          <Route path="/sanitary-Pads/:id">
            <SanitaryPads />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  )
}
