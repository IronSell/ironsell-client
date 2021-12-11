import '../App.css';
import { useState, useEffect } from 'react';
import { getCompany } from '../services/companies';
import { Collapse } from 'antd';
const { Panel } = Collapse;



const CompanyPage = () => {
  const [company, setCompany] = useState([]);

  let urlStr = window.location.href;
  let url = new URL(urlStr);
  let search_params = url.searchParams;
  let id = search_params.get('id');

  useEffect(() => {
    getCompany(id).then((response) => {
      setCompany(response.data.showCompany);
    });
  },[]);

  return (

    <div className='container'>
        <h1>{company.name}</h1>
        <h2>{company.professionalSector}</h2>
        <p>{company.address} {company.province}</p>
        <p>{company.companyUrl} {company.cif}</p>
        {/* <p>Card content</p>
        <p>Card content</p> */}
        
        <p>{company.companyDescription}</p>
        {/* <div>{company.jobOffers}</div> */}
            <p>{company.jobOffers}</p>
        <p>Card content</p>
    </div>

   
  );
};

export default CompanyPage;