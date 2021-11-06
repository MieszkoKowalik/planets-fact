import React from "react";
import { useContext } from "react";
import { PlanetsContext } from "providers/PlanetsProviders";
import { Wrapper, StyledNavLink } from "./Navigation.styles";
const Navigation = (props) => {
  const planets = useContext(PlanetsContext);

  return (
    <Wrapper {...props}>
      {planets.map((planet) => (
        <li key={planet.name}>
          <StyledNavLink to={planet.name}>{planet.name}</StyledNavLink>
        </li>
      ))}
    </Wrapper>
  );
};

export default Navigation;
