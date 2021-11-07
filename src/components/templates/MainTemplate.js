import React from "react";
import { useContext } from "react";
import { PlanetsContext } from "providers/PlanetsProviders";
import { Wrapper } from "./MainTemplate.styles";
import NavBar from "components/organisms/NavBar/NavBar";

const MainTemplate = ({ children }) => {
  const planetsData = useContext(PlanetsContext);

  return (
    <Wrapper>
      <NavBar />
      {/* TODO:Replace with proper loading screen */}
      {planetsData.length ? children : <p>Loading...</p>}
    </Wrapper>
  );
};

export default MainTemplate;
