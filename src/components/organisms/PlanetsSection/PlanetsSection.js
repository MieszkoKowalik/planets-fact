import React from "react";

import Tabs from "components/molecules/Tabs/Tabs";
import { useContext } from "react";
import { PlanetsContext } from "providers/PlanetsProviders";
import { useParams } from "react-router";
import { Routes } from "react-router";
import { Route } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import PlanetInfo from "components/molecules/PlanetInfo/PlanetInfo";
import PlanetDetails from "components/molecules/PlanetDetails/PlanetDetails";
import styled from "styled-components";
import { useTheme } from "styled-components";
import { useMediaQuery } from "hooks/useMediaQuery";
const Grid = styled.div`
  display: grid;
  padding: 0 24px;
  max-width: 1110px;
  margin: 0 auto;
  @media ${({ theme }) => theme.media.medium} {
    padding: 0 40px;
  }
`;

const PlanetsSection = () => {
  const currentPlanet = useParams();
  const { changeCurrentPlanet, currentPlanetData } = useContext(PlanetsContext);
  const theme = useTheme();
  const isDisplayMedium = useMediaQuery(theme.media.medium);
  let layout = (
    <>
      <Tabs />
      <Grid>
        <PlanetInfo />
        <PlanetDetails />
      </Grid>
    </>
  );
  if (isDisplayMedium) {
    layout = (
      <Grid>
        <PlanetInfo />
        <Tabs />
        <PlanetDetails />
      </Grid>
    );
  }

  useEffect(() => {
    changeCurrentPlanet(currentPlanet.planet);
  }, [changeCurrentPlanet, currentPlanet.planet]);
  return <>{currentPlanetData.name ? <main>{layout}</main> : null}</>;
};

export default PlanetsSection;
