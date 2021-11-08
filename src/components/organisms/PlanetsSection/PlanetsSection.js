import React from "react";

import Tabs from "components/molecules/Tabs/Tabs";
import { useContext } from "react";
import { PlanetsContext } from "providers/PlanetsProviders";
import { useParams } from "react-router";
import { Routes } from "react-router";
import { Route } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import PlanetInfo from "components/molecules/PlanetInfo/PlanetInfo";
const PlanetsSection = () => {
  const currentPlanet = useParams();
  const { changeCurrentPlanet, currentPlanetData } = useContext(PlanetsContext);
  useEffect(() => {
    changeCurrentPlanet(currentPlanet.planet);
  }, [changeCurrentPlanet, currentPlanet.planet]);
  return (
    <>
      {currentPlanetData.name ? (
        <main>
          <Tabs />

          <PlanetInfo />
        </main>
      ) : null}
    </>
  );
};

export default PlanetsSection;
