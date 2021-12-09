import '../App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
// import CardCompanyByUser from '../components/CardCompany/CardCompanyByUser'
// import CardCompanyByCompany from '../components/CardCompany/CardCompanyByCompany'

const CompanyPage = () => {

    const [companyId, setCompanyId] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5005/api/companies/:_id').then((response) => {
          console.log(response.data.showCompany)
          setCompanyId(response.data.showCompany)
        })
      }, [])

  return (
    <div className="CompanyPage">
      <h1>Companiy</h1>
      <h2>List of Companies</h2>
      <div>
          {/* <CardCompanyByUser showCompany={showCompany} /> */}
      </div>
    </div>
  )
}

export default CompanyPage