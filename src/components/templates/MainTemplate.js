import React from "react";
import { useContext } from "react";
import { PlanetsContext } from "providers/PlanetsProviders";
import { Wrapper } from "./MainTemplate.styles";
import NavBar from "components/organisms/NavBar/NavBar";
import Loader from "components/molecules/Loader/Loader";

const MainTemplate = ({ children }) => {
  const { planets } = useContext(PlanetsContext);

  return (
    <Wrapper>
      <NavBar />
      {/* TODO:Replace with proper loading screen */}
      {planets.length ? children : <Loader></Loader>}
    </Wrapper>
  );
};

export default MainTemplate;
