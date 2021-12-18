import '../App.css';
import Searchbar from '../components/Searchbar/Searchbar';

function HomePage() {
  return (
    <main className='App'>
      <div className='container'>
        <h1>Home Page</h1>
        <Searchbar />
      </div>
    </main>
  );
}

export default HomePage;
