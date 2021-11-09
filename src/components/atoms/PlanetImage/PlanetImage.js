import React from "react";
import { useContext } from "react";
import { PlanetsContext } from "providers/PlanetsProviders";
import { Routes, Route } from "react-router";
import { Wrapper } from "./PlanetImage.styles";
const PlanetImage = () => {
  const { currentPlanetData } = useContext(PlanetsContext);
  return (
    <Wrapper>
      <Routes>
        <Route
          path="overview"
          element={<img src={currentPlanetData.images.planet} alt="" />}
        />
        <Route
          path="structure"
          element={<img src={currentPlanetData.images.internal} alt="" />}
        />
        <Route
          path="surface"
          element={<img src={currentPlanetData.images.geology} alt="" />}
        />
      </Routes>
    </Wrapper>
  );
};

export default PlanetImage;
