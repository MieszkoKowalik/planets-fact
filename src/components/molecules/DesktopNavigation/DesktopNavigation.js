import { PlanetsContext } from "providers/PlanetsProviders";
import React from "react";
import { useContext } from "react";
import { Wrapper, StyledNavLink } from "./DesktopNavigation.styles";

const DesktopNavigation = () => {
  const planets = useContext(PlanetsContext);
  return (
    <Wrapper>
      {planets.map((planet) => (
        <li key={planet.name}>
          <StyledNavLink to={planet.name}>{planet.name}</StyledNavLink>
        </li>
      ))}
    </Wrapper>
  );
};

export default DesktopNavigation;
