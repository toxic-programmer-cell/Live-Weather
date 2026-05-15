import "./App.css";
import { Container, Modal } from "react-bootstrap";
import Axios from "axios";
import { useState } from "react";
import ShowWeather from "./components/ShowWeather";
import Home from "./components/Home";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState();
  const [error, setError] = useState("");
  const [smShow, setSmShow] = useState(false);

  const API_KEY = process.env.REACT_APP_API_KEY;

  const fetchWeather = async (e) => {
    try {
      e.preventDefault();
      let response = await Axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`,
      );
      setWeather(response.data);
      setError("");
      setSmShow(false)
    } catch (error) {
      setSmShow(true)
      setError(
        "Error while fetching weather!! Enter valid city name, eg  Delhi, Mumabi",
      );

      setTimeout(()=>{
        setSmShow(false)
      },3000)
    }
  };

  const handleSearchAgain = () => {
    setCity("");
    setWeather(undefined);
  };

  const showResults = city && weather;

  return (
    <div className="app-shell">
      <Container className="app-container">
        <header className="app-header">
          <h1 className="app-title">Live Weather</h1>
          <p className="app-tagline">Real-time conditions for any city</p>
          {showResults && (
            <button
              type="button"
              className="app-back-btn"
              onClick={handleSearchAgain}
            >
              ← Search another city
            </button>
          )}
        </header>

        <main className="app-main">
          {showResults ? (
            <ShowWeather weather={weather} city={city} />
          ) : (
            <Home updateCity={setCity} fetchWeather={fetchWeather} />
          )}
        </main>
      </Container>

      {error && (
        <Modal
          size="sm"
          show={smShow}
          onHide={() => setSmShow(false)}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm" className="text-danger text-center">
              ERROR!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-black">{error}</Modal.Body>
        </Modal>
      )}
    </div>
  );
}

export default App;
