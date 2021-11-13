import React from "react";
import Tabs from "components/molecules/Tabs/Tabs";
import { useContext, useEffect } from "react";
import { PlanetsContext } from "providers/PlanetsProviders";
import { useParams } from "react-router";
import { Routes } from "react-router";
import { Route } from "react-router-dom";
import PlanetInfo from "components/molecules/PlanetInfo/PlanetInfo";
import PlanetDetails from "components/molecules/PlanetDetails/PlanetDetails";
import { useTheme } from "styled-components";
import { useMediaQuery } from "hooks/useMediaQuery";
import PlanetImage from "components/atoms/PlanetImage/PlanetImage";
import { Grid } from "./PlanetsSection.styles";

const PlanetsSection = () => {
  const currentPlanet = useParams();
  const { changeCurrentPlanet, currentPlanetData, isMenuOpen } =
    useContext(PlanetsContext);
  const theme = useTheme();
  const isDisplayMedium = useMediaQuery(theme.media.medium);
  let layout = (
    <>
      {isMenuOpen ? null : (
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
      )}
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
