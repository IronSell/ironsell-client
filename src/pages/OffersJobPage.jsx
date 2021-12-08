import "../App.css";
import Searchbar from "../components/Searchbar/Searchbar"
import CardOffers from '../components/CardOffers/CardOffers';




function OffersJobPage() {

  return (
      
    <div className="App">
        <h1>OffersJobPage</h1>
     <Searchbar/>
     <CardOffers/>
    </div>
  );
}

export default OffersJobPage;