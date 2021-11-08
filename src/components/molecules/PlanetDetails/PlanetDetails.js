import React from "react";
import { useContext } from "react";
import { PlanetsContext } from "providers/PlanetsProviders";
import { Wrapper, Detail } from "./PlanetDetails.styles";
const PlanetDetails = () => {
  const { currentPlanetData } = useContext(PlanetsContext);

  const planetDetails = [
    { name: "rotation", content: "Rotation time" },
    { name: "revolution", content: "Revolution time" },
    { name: "radius", content: "Radius" },
    { name: "temperature", content: "Average temp." },
  ];

  return (
    <Wrapper>
      {planetDetails.map((detail) => (
        <Detail key={detail.name}>
          <h3>{detail.content}</h3>
          <p>{currentPlanetData[detail.name]}</p>
        </Detail>
      ))}
    </Wrapper>
  );
};

export default PlanetDetails;
