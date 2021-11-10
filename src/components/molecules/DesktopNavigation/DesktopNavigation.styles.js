import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 665px;
  margin-top: 35px;
  list-style: none;
  @media ${({ theme }) => theme.media.large} {
    margin-top: 0;
    height: 100%;
  }
  li {
    height: 100%;
  }
`;

export const StyledNavLink = styled(NavLink).attrs((props) => ({
  planet: props.planet.toLowerCase(),
}))`
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  font-size: 11px;
  letter-spacing: 0.09em;
  line-height: 2.27;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  @media ${({ theme }) => theme.media.large} {
    height: 100%;
    position: relative;
    color: ${({ theme }) => theme.colors.neutralLight};
    transition: color 0.15s;
    &:hover,
    &:focus {
      color: ${({ theme }) => theme.colors.white};
      &::before {
        transform: scaleX(1);
        background-color: ${({ theme, planet }) => theme.colors[planet]};
      }
    }

    &::before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      transform: scaleX(0);
      height: 4px;
      transition: transform 0.2s;
    }
    &.active::before {
      transform: scaleX(1);
      background-color: ${({ theme, to }) => theme.colors[to]};
    }
  }
`;
