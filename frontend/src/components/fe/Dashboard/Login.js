import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import "./style.css";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()

export default function App() {
   return (
     <QueryClientProvider client={queryClient}>
       <Login />
     </QueryClientProvider>
   )
}
function Login() {

  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")
  const endpoint = 'http://localhost:8001/accounts/graphql'
  const Users = `
  {
    Users{ 
      username
      password
    }
  }
`;
const { isLoading, error} = useQuery("Launches", () => {
  return fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: Users }),
  })
  .then((response) => {
    if (response.status >= 400) {
      throw new Error("Error fetching data");
    } else {
      return response.json();
    }
  })
  .then((data) => data.data);

})
if (isLoading) return "Loading...";
if (error) return <pre>{error.message}</pre>;
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



