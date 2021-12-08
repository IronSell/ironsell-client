import "../App.css";
import Searchbar from "../components/Searchbar/Searchbar";
import CardCompanies from "../components/CardCompanies/CardCompanies"



const CompaniesPage = ()=>{

    return (
        <div className="CompaniesPage">
            <h1>Companies</h1>
            <Searchbar />
            <CardCompanies />
        </div>
    )
}

export default CompaniesPage;