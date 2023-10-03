import "./App.css";
import Row from "./componenets/Row/Row";
import Banner from "./componenets/banner/Banner";
import requests from "./requiests";
import Nav from "./componenets/Nav/Nav";
import Footer from "./componenets/footer/Footer";
// import SimpleSlider from "./componenets/SimpleSlider";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      {/* <SimpleSlider/> */}
      <Row
        title="NETFLIX ORGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchPopular} />
      <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />

      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Footer/>
    </div>
  );
}

export default App;
