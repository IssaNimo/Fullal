
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './SideBar.css';

export default function Home() {
  const [subCounties, setSubCounties] = useState([]);

  useEffect(() => {
    const fetchSubCounties = async () => {
      const result = await axios.get('http://localhost:8001/api/subcounty/');
      setSubCounties(result.data);
    };
    fetchSubCounties();
  }, []);

  const countyTypes = subCounties.flatMap(dataItem => [dataItem.subcounty_name])
   .filter((countyType, index, array) => array.indexOf(countyType) === index)
   .sort();

  const counts = countyTypes.reduce((acc, countyType) => {
    const count = subCounties.filter(item => item.subcounty_name === countyType).length;
    acc[countyType] = count;
    return acc;
  }, {});

  return (
    <div>
      <section className=''>
        <h1 className='section_title'>
          <span>Number of Girls Registered in Each Sub County</span>
        </h1>
        <div className=''>
          {countyTypes.map(countyType => (
            <div className='sub_counties' key={countyType}>
              <h2 className='counties_title'>{countyType}</h2>
              <p>{counts[countyType]}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
