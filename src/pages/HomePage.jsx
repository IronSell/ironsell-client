
import "../App.css";
import Searchbar from "../components/Searchbar/Searchbar"
import CardCompanies from "../components/CardCompanies/CardCompanies";
import CardCompany from "../components/CardCompany"





function HomePage() {

  return (
    <div className="App">
      <h1>Home Page</h1>
     <Searchbar/>
     <CardCompanies />
     <CardCompany />

    </div>
  );
}

export default HomePage;
