import { useParams } from "react-router";
import React from "react";

const PlanetsSection = () => {
  const planet = useParams();

  console.log(planet);
  return <></>;
};

export default PlanetsSection;
