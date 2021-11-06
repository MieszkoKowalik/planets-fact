import React from "react";
import { Logo, Wrapper } from "./NavBar.styles";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { PlanetsContext } from "providers/PlanetsProviders";

const NavBar = () => {
  const planets = useContext(PlanetsContext);
  console.log(planets);
  return (
    <Wrapper>
      <Logo>THE&nbsp;PLANETS</Logo>
      {planets.map((planet) => (
        <NavLink to={planet.name} key={planet.name}>
          {planet.name}
        </NavLink>
      ))}
    </Wrapper>
  );
};

export default NavBar;
