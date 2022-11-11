import React from 'react'
import './SideBar.css'

export default function Home() {
  return (
    <div>
      <section className=''>
      <h1 className='section_title'>
        <span>Number of Girls Registred in Each Sub County</span>
      </h1>
      <div className=''>
        <div className='sub_counties SamburuNorth'>
          <h2 className='counties_title'>Samburu North</h2>
          <p></p>
        </div>
        <div className='wrapper'>
          <div className=' sub_counties SamburuEast'>
            <h2 className='counties_title'> Samburu East</h2>
            <p></p>
          </div>
          <div className='sub_counties SamburuWest'>
            <h2 className='counties_title'> Samburu West</h2>
            <p></p>
          </div>
          
        </div>
      </div>
      </section>
    </div>
  )
}
