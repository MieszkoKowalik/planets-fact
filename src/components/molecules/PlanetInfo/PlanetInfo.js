import React from "react";
import { useContext } from "react";
import { PlanetsContext } from "providers/PlanetsProviders";
import { Wrapper } from "./PlanetInfo.styles";
import { useParams } from "react-router";

const PlanetInfo = () => {
  const { currentPlanetData } = useContext(PlanetsContext);
  const { id } = useParams();
  return (
    <Wrapper>
      <h2>{currentPlanetData.name}</h2>
      <blockquote>
        <p>{currentPlanetData[id].content}</p>
      </blockquote>
      <cite>
        Source: <a href={currentPlanetData[id].source}>Wikipedia</a>
      </cite>
    </Wrapper>
  );
};

export default PlanetInfo;
