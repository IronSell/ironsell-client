import "../App.css";
import axios from 'axios'
import { useState, useEffect} from 'react';
import Searchbar from "../components/Searchbar/Searchbar";
import CardCompanies from "../components/CardCompanies/CardCompanies"

const CompaniesPage = ()=>{
    const [companiesList, setCompaniesList] = useState([])

    useEffect(()=> {
    axios.get('http://localhost:5005/api/companies').then((response) => {
        console.log(response.data.searchCompany)

        setCompaniesList(response.data.searchCompany)
    });
    }, [])

    return (
        <div className="CompaniesPage">
            <h1>Companies</h1>
            <Searchbar />
            <h2>List of Companies</h2>
            {companiesList.map((searchCompany) => (
            <CardCompanies searchCompany={searchCompany} />
      ))}  
        </div>
    )
}

export default CompaniesPage;