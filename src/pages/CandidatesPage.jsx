import '../App.css';
import { useState, useEffect } from 'react';
import CandidatesSearchbar from '../components/Candidates Searchbar/CandidatesSearchbar';
import CardCandidate from '../components/CardCandidates/CardCandidate';
import { getCandidates } from '../services/candidates';

const CandidatesPage = (props) => {
  const [fileteredCandidates, setFilteredCandidates] = useState([]);
  const [candidatesList, setCandidatesList] = useState([]);

  useEffect(() => {
    getCandidates().then((response) => {
      console.log(response)
      setCandidatesList(response.data.getCandidates);
      setFilteredCandidates(response.data.getCandidates);
    });
  }, []);

  return (
    <div className='container'>
      <h1>CandidatesPage</h1>
      <CandidatesSearchbar
        setFilteredCandidates={setFilteredCandidates}
        candidatesList={candidatesList}
      />
      <div className='flexbox'>
        {fileteredCandidates?.map((getCandidates) => (
          <CardCandidate
            getCandidates={getCandidates}
            key={getCandidates._id}
          />
        ))}
      </div>
    </div>
  );
};

export default CandidatesPage;
