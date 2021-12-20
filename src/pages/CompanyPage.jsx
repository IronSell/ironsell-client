import '../components/CardCompany/CardCompany.css';
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
  }, []);

  return (
    <div class='wrapper' id='app'>
      <div class='card-form'>
        <div class='card-list'>
          <div class='card-item -front'>
            <div class='card-item__side'>
              <div class='card-item__cover'>
                <img
                  src={company.companyLogo}
                  class='card-item__bg'
                  alt='img'
                />
              </div>
            </div>
          </div>
        </div>
        <div class='card-form__inner'>
          <div>
            <h1>{company.name}</h1>
          </div>
          <h2>{company.professionalSector}</h2>
          <p>
            {company.address} {company.province}
          </p>
          <p>
            <b>{company.companyUrl}</b> {company.cif}
          </p>
          <p>{company.companyDescription}</p>
          <button class='button-class card-form__button'>
            <b>Offers</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyPage;


