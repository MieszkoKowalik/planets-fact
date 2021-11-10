import React from "react";
import { useState, useEffect } from "react";
export const PlanetsContext = React.createContext({
  planets: [],
  currentPlanetData: {},
});

const PlanetsProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [currentPlanetData, setCurrentPlanetData] = useState({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeCurrentPlanet = (planetName) => {
    const currentPlanetData = planets.find(
      (planet) => planet.name.toLowerCase() === planetName
    );

    setCurrentPlanetData(currentPlanetData);
  };

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
    <PlanetsContext.Provider
      value={{
        planets,
        currentPlanetData,
        changeCurrentPlanet,
        isMenuOpen,
        setIsMenuOpen,
      }}
    >
      {children}
    </PlanetsContext.Provider>
  );
};

export default PlanetsProvider;
