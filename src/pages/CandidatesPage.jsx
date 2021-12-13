import '../App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Searchbar from '../components/Searchbar/Searchbar'
import CardCandidate from '../components/CardCandidates/CardCandidate'

const CandidatesPage = ()=>{
    const [candidatesList, setcandidatesList] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5005/api/candidates').then((response) => {
        setcandidatesList(response.data.showCandidates)
    })
  }, [])
    return(
<div className="container">
      <h1>CandidatesPage</h1>
      <Searchbar />
        <h1>List of candidates</h1>
        <CardCandidate />
        
{/*         
      <div className="candidatesPage">
        {candidatesList.map((showCandidates, index) => (

          <CardCandidate
          showCandidates={showCandidates}
          key={index + Date.now()} 
        />
        ))}
      </div> */}
    </div>
    )
}

export default CandidatesPage