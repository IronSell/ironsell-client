import axios from 'axios';
import '../App.css';
import Searchbar from '../components/Searchbar/Searchbar';
import Test from '../components/CardOffers/Test';
import { useState, useEffect } from 'react';

function OffersJobPage() {
  const [jobOffers, setJobOffers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5005/api/offers').then((response) => {
      console.log(response.data.searchOffers)
      setJobOffers(response.data.searchOffers);
    });
  }, []);

  return (
    <div className='ContainerOfferJobPage'>
      <h1>OffersJobPage</h1>
      <Searchbar />
<<<<<<< HEAD
     <div className='OffersStylesDiv'>
      <h2>List of Job Offers</h2>
      {jobOffers.map((searchOffers) => (
    
         <Test searchOffers={searchOffers} />
=======
      <h2>List of Job Offers</h2>
      {jobOffers.map((searchOffers, index) => (
        <Test searchOffers={searchOffers} key={index + Date.now()} />
>>>>>>> 2299fa3b15eea6e24137922ec88590e48f1b41cb
      ))}
    </div>
  );
}

export default OffersJobPage;
