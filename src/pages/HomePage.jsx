
import "../App.css";
import Searchbar from "../components/Searchbar/Searchbar"
import CarOffers from '../components/CardOffers/CardOffers';




function HomePage() {

  return (
    <div className="App">
      <h1>feersJobPage</h1>
     <Searchbar/>
     <CarOffers/>
    </div>
  );
}

export default HomePage;
