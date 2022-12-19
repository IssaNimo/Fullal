import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import './SideBar.css'

export default function Home() {
  const [sub_county, setSubCounty] = useState([])

  const fetchSubCounty = async () => {

    const result = await axios.get('http://localhost:8001/api/subcounty/')

    console.log(result.data)
    setSubCounty(result.data)
  }

  useEffect(() => {
    fetchSubCounty()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps


  const countyTypes = sub_county.map(dataItem => dataItem.subcounty_name)
  .filter((countyType, index, array) => array.indexOf(countyType) === index)
  
  let counts = countyTypes
  .map(countyType => ({
    type: countyType,
    count: sub_county.filter(item => item.subcounty_name === countyType).length
  }));
console.log(counts) 

  return (
    <div>
      <section className=''>
      <h1 className='section_title'>
        <span>Number of Girls Registred in Each Sub County</span>
      </h1>
      
      <div className=''>
        
        <div className='sub_counties SamburuNorth'>
          <h2 className='counties_title'>Samburu North</h2>
          <p>
          </p>
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
