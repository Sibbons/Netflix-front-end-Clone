import './CSS/App.css';
import Row from './Row'
import requests from './request'
import Banner from './Banner'
import Nav from './Nav'

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title = "Netflix Originals" fetchURL ={requests.fetchNetflixOG} isLargeRow/>
      <Row title ="Romance Movies" fetchURL={requests.fetchRomance}/>
      <Row title ="Comedy Movies" fetchURL={requests.fetchComedyMovies}/>
      <Row title ="Action Movies" fetchURL={requests.fetchActionMovies}/>
      <Row title ="Horror Movies" fetchURL={requests.fetchHorrorMovies}/>
      <Row title ="Documentaries" fetchURL={requests.fetchDocumentaies}/>
      <Row title ="Trending Movies" fetchURL={requests.fetchTrending}/>

    </div>
  );
}

export default App;
