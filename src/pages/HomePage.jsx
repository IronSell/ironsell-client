
import "../App.css";
import Searchbar from "../components/Searchbar/Searchbar"
// import CardCompanies from "../components/CardCompanies/CardCompanies";
// import CardCompany from "../components/CardCompany"

import Test from '../components/CardOffers/Test';
// import CardCompanies from "../components/CardCompanies/CardCompanies";


function HomePage() {

  return (
    <div className="App">
      <h1>Home Page</h1>
     <Searchbar/>
     <Test/>
     {/* <CardCompanies /> */}
    </div>
  );
}

export default HomePage;
