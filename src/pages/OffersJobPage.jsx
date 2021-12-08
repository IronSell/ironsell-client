import axios from 'axios';
import '../App.css';
// import Searchbar from '../components/Searchbar/Searchbar';
// import CardOffers from '../components/CardOffers/CardOffers';
import { useState, useEffect } from 'react';

function OffersJobPage() {
  const [jobOffers, setJobOffers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5005/api/offers').then((response) => {
      setJobOffers(response.data.searchOffers);
    });
  }, []);

  return (
    <div className='App'>
      {/* <h1>OffersJobPage</h1>
      <Searchbar />
      <CardOffers /> */}
      <h1>List of Job Offers</h1>
      {jobOffers.map((searchOffers) => (
        <div key={searchOffers._id} className='card'>
          <h2>{searchOffers.jobTitle}</h2>
          <p>Experience: {searchOffers.experienceYears}</p>
          <p>Salary: {searchOffers.salary} €</p>
          <p> Description: {searchOffers.description}</p>
          <p></p>
        </div>
      ))}
    </div>
  );
}

export default OffersJobPage;
