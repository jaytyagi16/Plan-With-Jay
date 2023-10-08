import React, { useState } from "react";
import Tours from "./components/Tours";
import data from "./data";
import Card from "./components/Card";

const App = () => {

  const [tours, setTours] = useState(data);

  function removeTour(id) {
    let newTour = tours.filter(tour => tour.id !== id);
    setTours(newTour);
  }

  if(tours.length === 0){
    return (
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button className="btn-refresh" onClick={() => setTours(data)}>Refresh</button>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="title">Plan With Jay</h1>

      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
};

export default App;
