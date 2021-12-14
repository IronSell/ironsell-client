import axios from 'axios'
import '../App.css'
import Searchbar from '../components/Searchbar/Searchbar'
import CardOffer from '../components/CardOffers/CardOffers'
import { useState, useEffect } from 'react'

function OffersJobPage() {
  const [jobOffers, setJobOffers] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5005/api/offers').then((response) => {
      setJobOffers(response.data.searchOffers)
    })
  }, [])

  return (
    <div className="container ">
      <h1>OffersJobPage</h1>
      <Searchbar />
      <div className="offersStylesJobPage">
        {jobOffers.map((searchOffers, index) => (
          <CardOffer 
          searchOffers={searchOffers} 
          key={index + Date.now()} />
        ))}
      </div>
    </div>
  )
}

export default OffersJobPage
