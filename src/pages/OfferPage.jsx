import '../App.css';
import { useState, useEffect } from 'react';
import { getOffers } from '../services/offers';

const OfferPage = () => {
  const [offer, setOffer] = useState([]);

  let urlStr = window.location.href;
  let url = new URL(urlStr);
  let search_params = url.searchParams;
  let id = search_params.get('id');

  useEffect(() => {
    getOffers(id).then((response) => {
      console.log({ response });
      setOffer(response.data.showOffer);
    });
  });

  return (
    <div className='OfferPage'>
      <h1>{offer.jobTitle}</h1>
      <h2>{offer.salary}</h2>
    </div>
  );
};

export default OfferPage;