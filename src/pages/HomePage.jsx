
import "../App.css";
import Searchbar from "../components/Searchbar/Searchbar"
import CarOffers from '../components/CardOffers/CardOffers';




function HomePage() {

  return (
    <div className="App">
     <Searchbar/>
     <CarOffers/>
    </div>
  );
}

export default HomePage;
