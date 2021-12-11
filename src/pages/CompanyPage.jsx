import '../App.css';
import { useState, useEffect } from 'react';
import { getCompany } from '../services/companies';

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
    <div className='CompanyPage'>
      <h1>{company.name}</h1>
      <h2>{company.companyDescription}</h2>
      <div>{/* <CardCompanyByUser showCompany={showCompany} /> */}</div>
    </div>
  );
};

export default CompanyPage;