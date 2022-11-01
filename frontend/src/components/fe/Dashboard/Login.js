import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import "./style.css";

export default function Login() {

  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")
  // const [errormsg, setErrormsg] = useState("")
 
    
  return (
    <div id='loginform'>
        
            <Form className='login'>
             <h2 id='headerTitle'>Login</h2>
             <Form.Label className='Login' id='Label'>Username</Form.Label>
             <Form.Control className='Login' id='Input'
             required
             type='Text'
             placeholder='Enter your username'
             autoComplete='off'
             onChange={(e) => setUser(e.target.value)}
             value= {user}
             
             >
          
              
             </Form.Control>
             <Form.Label className='Login' id='Label'>Password</Form.Label>
             <Form.Control className='Login' id='Input'
             required
             type='password'
             placeholder='Enter your password'
             onChange={(e) => setPassword(e.target.value)}
             value={password}
             ></Form.Control>
             <Button id='button' className='Login'>Log in</Button>
            </Form>
        

    </div>
  )
}



