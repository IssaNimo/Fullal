import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Login from './Login'
import Students from './Students'
import Home from './Home'



export default function NavPage() {
  return (
    <div>
        <Routes>
            <Route path='/home' element={<Home />}> </Route>
            <Route path='/students' element={<Students />}></Route>
            <Route path='/login' element={<Login />}></Route>
            

        </Routes>
    </div>
  )
}
