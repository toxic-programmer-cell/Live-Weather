import React from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import "./Home.css";

const Home = (props) => {
  const { updateCity, fetchWeather } = props;

  return (
    <Row className="justify-content-center">
      <Col md={8} lg={6}>
        <Card className="home-card m-3">
          <div className="text-center">
            <div className="home-card__icon" aria-hidden="true">
              🌤️
            </div>
            <h2 className="home-card__title text-white">Find the weather</h2>
            <p className="home-card__subtitle text-white">
              Enter a city name to see live conditions
            </p>
          </div>

          <Form
            className="home-card__form"
            onSubmit={(e) => fetchWeather(e)}
          >
            <Form.Group controlId="cityinput">
              <label className="home-card__label text-white fw-bold" htmlFor="cityinput">
                City
              </label>
              <Form.Control
                className="home-card__input"
                type="text"
                placeholder="e.g. Delhi, Jharkhand, Mumbai"
                onChange={(e) => updateCity(e.target.value)}
                autoComplete="off"
              />
            </Form.Group>
            <Button variant="success" type="submit" className="mt-2 w-100">
              Get weather
            </Button>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Home;
