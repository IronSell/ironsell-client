import axios from 'axios';
import '../App.css';
import Searchbar from '../components/Searchbar/Searchbar';
import CardOffer from '../components/CardOffers/CardOffer';
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
      <h2>List of Job Offers</h2>
      {jobOffers.map((searchOffers, index) => (
        <CardOffer searchOffers={searchOffers} key={index + Date.now()} />
      ))}
    </div>
  );
}

export default OffersJobPage;
