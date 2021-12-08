
import "../App.css";
import Searchbar from "../components/Searchbar/Searchbar"
import CardOffers from '../components/CardOffers/CardOffers';
import CardCompanies from "../components/CardCompanies/CardCompanies";





function HomePage() {

  return (
    <div className="App">
      <h1>OffersJobPage</h1>
     <Searchbar/>
     <CardOffers/>
     <CardCompanies />

    </div>
  );
}

export default HomePage;
