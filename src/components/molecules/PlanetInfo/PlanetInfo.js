import React from "react";
import { useContext } from "react";
import { useParams } from "react-router";
import { PlanetsContext } from "providers/PlanetsProviders";
import { Wrapper } from "./PlanetInfo.styles";

const PlanetInfo = () => {
  const currentPlanet = useParams();
  console.log(currentPlanet);
  const { currentPlanetData } = useContext(PlanetsContext);

  return (
    <Wrapper>
      <h2>{currentPlanetData.name}</h2>
      <blockquote>
        <p>{currentPlanetData.overview.content}</p>
      </blockquote>
      <cite>
        Source: <a href={currentPlanetData.overview.source}>Wikipedia</a>
      </cite>
    </Wrapper>
  );
};

export default PlanetInfo;
