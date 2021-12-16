import '../App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Searchbar from '../components/Searchbar/Searchbar';
import CardCandidate from '../components/CardCandidates/CardCandidate';
import * as USER_HELPERS from '../utils/userToken';

const CandidatesPage = (props) => {
  const [candidatesList, setcandidatesList] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/candidates`, {
        headers: {
          Authorization: USER_HELPERS.getUserToken(),
        },
      })
      .then((response) => {
        setcandidatesList(response.data.getCandidates);
      });
  }, []);

  return (
    <div className='container'>
      <h1>CandidatesPage</h1>
      <Searchbar />
      <div className='flexbox'>
      {candidatesList.map((getCandidates) => (
        <CardCandidate getCandidates={getCandidates} key={getCandidates._id} />
      ))}
      </div>
    </div>
  );
};

export default CandidatesPage;
