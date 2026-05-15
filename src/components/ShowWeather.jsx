import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./ShowWeather.css";

const kelvinToCelsius = (kelvin) => Math.round(kelvin - 273.15);

const formatVisibility = (meters) => {
  if (meters == null) return "—";
  return meters >= 1000 ? `${(meters / 1000).toFixed(1)} km` : `${meters} m`;
};

const ShowWeather = ({ weather, city }) => {
  const { main, weather: conditions, wind, sys, visibility, name } = weather;
  const condition = conditions?.[0];
  const displayCity = name || city;
  const country = sys?.country;

  const stats = [
    { label: "Feels like", value: `${kelvinToCelsius(main.feels_like)}°C` },
    { label: "Humidity", value: `${main.humidity}%` },
    { label: "Pressure", value: `${main.pressure} hPa` },
    { label: "Wind", value: `${wind?.speed ?? "—"} m/s` },
    { label: "Visibility", value: formatVisibility(visibility) },
    {
      label: "Min / Max",
      value: `${kelvinToCelsius(main.temp_min)}° / ${kelvinToCelsius(main.temp_max)}°`,
    },
  ];

  return (
    <Row className="justify-content-center">
      <Col md={8} lg={6}>
        <Card className="weather-card m-3">
          <div className="weather-card__header">
            <h2 className="weather-card__city text-white">{displayCity}</h2>
            {country && (
              <p className="weather-card__country mb-0 text-white">{country}</p>
            )}
          </div>

          <div className="weather-card__hero">
            {condition?.icon && (
              <img
                className="weather-card__icon"
                src={`https://openweathermap.org/img/wn/${condition.icon}@2x.png`}
                alt={condition.description}
              />
            )}
            <p className="weather-card__temp text-white">
              {kelvinToCelsius(main.temp)}
              <span>°C</span>
            </p>
          </div>

          {condition?.description && (
            <p className="weather-card__description text-white">{condition.description}</p>
          )}

          <div className="weather-card__body text-white">
            <Row xs={2} md={3}>
              {stats.map((stat) => (
                <Col key={stat.label}>
                  <div className="weather-stat">
                    <span className="weather-stat__label">{stat.label}</span>
                    <span className="weather-stat__value">{stat.value}</span>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default ShowWeather;
