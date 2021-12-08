import "../App.css";
import Searchbar from "../components/Searchbar/Searchbar";
import CardCompanies from "../components/CardCompanies/CardCompanies"

import axios from 'axios'
import { useState, useEffect} from 'react';
import { Row } from "antd";

const getCompaniesService = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}/companies`,
  });

const CompaniesPage = ()=>{
    const [companiesList, setCompaniesList] = useState([])

    useEffect(()=> {
    axios.get(getCompaniesService).then((response) => {
        setCompaniesList(response.data.searchCompany)
    });
}, [])
    return (
        <div className="CompaniesPage">
            <h1>Companies</h1>
            <Searchbar />

            <Row style={{ width: "100%", justifyContent: "center" }}> 
            {companiesList.map(companies => {
            return(
              <CardCompanies companies={companies} /> 
            )
            })}
            </Row>  
        </div>
    )
}

export default CompaniesPage;