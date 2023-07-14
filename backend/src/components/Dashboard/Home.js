
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './SideBar.css';

export default function Home() {
  const [subCounties, setSubCounties] = useState([]);
  const [counts, setCounts] = useState({});
 

  useEffect(() => {
    const fetchSubCounties = async () => {
      const result = await axios.get('http://localhost:8001/api/subcounty/');
      setSubCounties(result.data);

      const countyTypes = subCounties.flatMap(dataItem => [dataItem.subcounty_name])
      .filter((countyType, index, array) => array.indexOf(countyType) === index)
      .sort();

      const newCounts = countyTypes.reduce((acc, countyType) => {
        const count = subCounties.filter(item => item.subcounty_name === countyType).length;
        acc[countyType] = count;
        return acc;
      }, {});

      setCounts(newCounts);
    };
    fetchSubCounties();
  }, [subCounties]);

  
  return (
    <div>
      <section className=''>
        <h1 className='section_title'>
          <span>Number of Girls Registered in Each Sub County</span>
        </h1>
        <div class="row" style={{ gap: '1rem' }}>
          {Object.entries(counts).map(([countyType, count]) => (
            <div class="col-10 mx-auto mx-md- py-4 col-md-4 d-flex align-items-center justify-content-between" style={{ background: ' #564242', borderRadius: ' 15px 50px 30px', padding: '20px', width: '200px', height: '150px', marginTop: '15px' }} key={countyType}>
              <div class="d-flex flex-column justify-content-center">
                <span style={{ fontSize: '2rem', fontWeight: '600' }}><div class="d-flex flex-column justify-content-center">
                  <span style={{ color: 'white' }}>{countyType}</span>
                  <span style={{ fontSize: '2rem', fontWeight: '600', color:'white' }}>
                    <div className='sub_counties' key={countyType}>
                      <p dangerouslySetInnerHTML={{ __html: `<span>${count}</span>` }}></p>
                    </div>
                  </span>
                </div></span>
              </div>
              <i class="fa fa-comments-o fa-3x" style={{ color: 'rgb(169, 169, 169)' }}></i>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
