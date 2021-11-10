import React from "react";
import { useContext } from "react";
import { PlanetsContext } from "providers/PlanetsProviders";
import { Wrapper, StyledNavLink } from "./MobileNavList.styles";
const MobileNavList = (props) => {
  const { planets } = useContext(PlanetsContext);

  return (
    <Wrapper {...props}>
      {planets.map((planet) => (
        <li key={planet.name}>
          <StyledNavLink
            onClick={props.click}
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

export default MobileNavList;
