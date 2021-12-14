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
  }, []);

  return (
    <div className="container">
    <div className="row">
      <div className="card col-md-12 p-3">
        <div className="row ">
          <div className="col-md-4">
            <img className="w-100" src="https://superhappygames.com/wp-content/uploads/2018/08/Word-Explorer-Icon-350x350px-300x300.png" />
          </div>
          <div className="col-md-8">
            <div className="card-block">
              <h1 className="card-title">{offer.jobTitle}</h1>
              <p className="card-text text-justify">{offer.salary}</p>
              <p className="card-text text-justify">{offer.experienceYears}</p>
              <p className="card-text text-justify">{offer.province}</p>
              <p className="card-text text-justify">{offer.requirements}</p>
              <p className="card-text text-justify">{offer.schedule}</p>
              <p className="card-text text-justify">{offer.description}</p>
              <a href="https://www.google.com" className="btn btn-primary">read more...</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default OfferPage;