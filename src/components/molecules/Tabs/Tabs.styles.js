import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  grid-area: tabs;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 48px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutralDark};

  @media ${({ theme }) => theme.media.medium} {
    border: none;
    flex-direction: column;
    height: unset;
    width: 80%;
    max-width: 370px;
    gap: 16px;
    align-self: center;
    justify-self: end;
  }
  @media ${({ theme }) => theme.media.large} {
    max-width: unset;
    width: 100%;
  }
`;
export const Tab = styled(NavLink).attrs(({ planet, id }) => ({ planet, id }))`
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  font-size: 9px;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.214em;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.neutralLight};

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 4px;
    width: 100%;
    background-color: ${({ theme, planet }) => theme.colors[planet]};
    transform: scaleX(0);
    transition: transform 0.2s;
  }
  &.active {
    color: ${({ theme }) => theme.colors.white};
    &::after {
      transform: scaleX(1);
    }
  }

  @media ${({ theme }) => theme.media.medium} {
    display: flex;
    width: 100%;
    padding: 14px 20px;
    border: 1px solid ${({ theme }) => theme.colors.neutralDark};
    color: ${({ theme }) => theme.colors.white};
    transition: background-color 0.2s, border 0.2s;
    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.colors.neutralDark};
    }
    &.active {
      border-color: ${({ theme, planet }) => theme.colors[planet]};
      background-color: ${({ theme, planet }) => theme.colors[planet]};
    }
    &::after {
      content: none;
    }
    &::before {
      content: attr(id);
      flex-basis: 30px;
      color: ${({ theme }) => theme.colors.neutralLight};
    }
  }
`;
