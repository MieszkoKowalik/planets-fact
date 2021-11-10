import { PlanetsContext } from "providers/PlanetsProviders";
import React from "react";
import { useContext } from "react";
import { Wrapper, StyledNavLink } from "./DesktopNavigation.styles";

const DesktopNavigation = () => {
  const { planets } = useContext(PlanetsContext);
  return (
    <Wrapper>
      {planets.map((planet) => (
        <li key={planet.name}>
          <StyledNavLink
            planet={planet.name}
            to={`${planet.name.toLowerCase()}/overview`}
          >
            {planet.name}
          </StyledNavLink>
        </li>
      ))}
    </Wrapper>
  );
};

export default DesktopNavigation;
