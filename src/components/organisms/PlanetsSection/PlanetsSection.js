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
import PlanetImage from "components/atoms/PlanetImage/PlanetImage";
const Grid = styled.div`
  padding: 0 24px 30px;
  max-width: 1110px;
  margin: 0 auto;
  @media ${({ theme }) => theme.media.medium} {
    padding: 0 40px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 460px auto auto;
    display: grid;
    grid-template-areas:
      "image image"
      "info tabs"
      "details details";
  }
  @media ${({ theme }) => theme.media.large} {
    grid-template-columns: 1fr 350px;
    grid-template-rows: 550px;
    grid-template-areas:
      "image info"
      "image tabs"
      "details details";
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
        <Routes>
          <Route
            path=":id"
            element={
              <>
                <PlanetImage />
                <PlanetInfo />
              </>
            }
          />
        </Routes>

        <PlanetDetails />
      </Grid>
    </>
  );
  if (isDisplayMedium) {
    layout = (
      <Grid>
        <Routes>
          <Route
            path=":id"
            element={
              <>
                <PlanetImage />
                <PlanetInfo />
              </>
            }
          />
        </Routes>
        <Tabs />
        <PlanetDetails />
      </Grid>
    );
  }

  useEffect(() => {
    changeCurrentPlanet(currentPlanet.planet);
  }, [changeCurrentPlanet, currentPlanet.planet]);
  return (
    <>
      {currentPlanetData.name ? (
        <main style={{ height: "100%" }}>{layout}</main>
      ) : null}
    </>
  );
};

export default PlanetsSection;
