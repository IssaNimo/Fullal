
import React from 'react'
 import { NavLink } from 'react-bootstrap'
import { SidebarData } from './SidebarData'
import "./SideBar.css"
import { Link } from 'react-router-dom'
export const SideBar = () => {
  return (
    <div>

        {
            SidebarData.map((item, index)=>{
                return(
                    <div className='side3' key={index}>
                        <NavLink as={Link} to={item.path}>
                            <span id='icon'>{item.icon}</span>
                            <span id='title'>{item.title}</span>

                        </NavLink>

                    </div>
                )
            })
        }

    </div>
  )
}
