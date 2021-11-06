import React from "react";
import { useState, useEffect } from "react";
export const PlanetsContext = React.createContext({
  planets: [],
});

const PlanetsProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  useEffect(() => {
    fetch("/data/data.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPlanets(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <PlanetsContext.Provider value={planets}>
      {children}
    </PlanetsContext.Provider>
  );
};

export default PlanetsProvider;
