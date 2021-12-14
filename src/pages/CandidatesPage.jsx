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
      .get('http://localhost:5005/api/candidates', {
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
      <h1>List of candidates</h1>
      {candidatesList.map((getCandidates) => (
        <CardCandidate getCandidates={getCandidates} key={getCandidates._id} />
      ))}
    </div>
  );
};

export default CandidatesPage;
