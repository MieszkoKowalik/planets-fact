import React from "react";

import Tabs from "components/molecules/Tabs/Tabs";
import { useContext } from "react";
import { PlanetsContext } from "providers/PlanetsProviders";

const PlanetsSection = () => {
  const planetsData = useContext(PlanetsContext);

  const currentPlanetData = planetsData.find(
    (planet) => planet.name.toLowerCase() === "venus"
  );
  console.log(currentPlanetData);

  return (
    <>
      <Tabs />
    </>
  );
};

export default PlanetsSection;
