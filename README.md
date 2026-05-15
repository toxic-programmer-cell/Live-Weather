# Live Weather App

A modern React single-page application that fetches and displays **real-time weather** for any city using the [OpenWeatherMap API](https://openweathermap.org/api).

## Project achievements

- Built a **React 19** SPA with a clear component structure (`App`, `Home`, `ShowWeather`)
- Integrated the **OpenWeatherMap API** with **Axios** for live weather data
- Managed application state with **React Hooks** (`useState`) and conditional rendering
- Secured the API key using **environment variables** (`.env`)
- Designed a **responsive, mobile-friendly UI** with **React Bootstrap** and custom CSS
- Implemented a full **search → results** flow with a **search again** option
- Displayed detailed weather metrics: temperature, feels-like, humidity, pressure, wind, visibility, and min/max

## Features

- Search any city by name and view current conditions
- Weather card with icon, description, and key stats
- Polished gradient UI with frosted-glass panels
- Easy navigation back to search another city

## Tech stack

| Category        | Tools                          |
| --------------- | ------------------------------ |
| Frontend        | React 19, React DOM            |
| HTTP            | Axios                          |
| UI              | Bootstrap 5, React Bootstrap   |
| API             | OpenWeatherMap                 |
| Tooling         | Create React App               |

## Project structure

```
src/
├── App.js                 # App shell, API fetch, routing between views
├── App.css
├── components/
│   ├── Home.jsx           # City search form
│   ├── Home.css
│   ├── ShowWeather.jsx    # Weather results display
│   └── ShowWeather.css
└── index.js
```

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- An [OpenWeatherMap](https://openweathermap.org/api) API key

### Installation

1. Clone the repository:

   ```bash
   git clone <your-repo-url>
   cd live-weater-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the project root:

   ```env
   REACT_APP_API_KEY=your_openweathermap_api_key
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm start`     | Run the app in development mode      |
| `npm run build` | Build for production                 |
| `npm test`      | Run the test runner                  |

## How it works

1. Enter a city name on the home screen and submit the form.
2. The app calls the OpenWeatherMap API and stores the response in state.
3. The weather card shows temperature (converted from Kelvin to °C), conditions, and additional metrics.
4. Use **Search another city** to return to the search form and look up a new location.

## License

This project is open source and available for learning and portfolio use.
