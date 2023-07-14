
import React from 'react'
 import { NavLink } from 'react-bootstrap'
import { SidebarData } from './SidebarData'
import "./SideBar.css"
import { Link } from 'react-router-dom'
export const SideBar = () => {
  return (
    <div>

{
  SidebarData.map((item, index) => {
    return (
      <div className='sidebar' key={index}>
        <NavLink  as={Link} to={item.path} activeClassName='active-link' className='hover-link'>
        <span id='icon' className='large-icon'>{item.icon}</span>
          <span id='title'>{item.title}</span>
        </NavLink>
      </div>
    );
  })
}


    </div>
  )
}
