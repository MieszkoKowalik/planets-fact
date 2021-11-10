import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Icon from "assets/images/icon-chevron.svg";

export const Wrapper = styled.ul`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: -1px;
  padding: 24px;
  transform: translateY(100%);
  list-style: none;
  z-index: 1000;
  background-color: ${({ theme }) => theme.colors.primary};

  li:not(:last-of-type)::after {
    content: "";
    display: block;
    height: 1px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.neutralDark};
  }
`;

export const StyledNavLink = styled(NavLink).attrs((props) => ({
  planet: props.planet.toLowerCase(),
}))`
  color: ${({ theme }) => theme.colors.white};
  display: block;
  padding: 20px 0;
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.09em;
  display: flex;
  align-items: center;
  &::before {
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    margin-right: 25px;
    border-radius: 50%;
    background-color: ${({ theme, planet }) => theme.colors[planet]};
  }
  &::after {
    content: url(${Icon});
    display: block;
    margin-left: auto;
  }
`;
