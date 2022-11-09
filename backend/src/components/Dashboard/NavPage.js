import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from './Home'
import Students from './Students'


export default function NavPage() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />}> </Route>
            <Route path='/students' element={<Students />}></Route>
            

        </Routes>
    </div>
  )
}
