import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Icon from "assets/images/icon-chevron.svg";

export const Wrapper = styled.ul`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0%;
  padding: 24px;
  transform: translateY(100%);

  li:not(:last-of-type)::after {
    content: "";
    display: block;
    height: 1px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.neutralDark};
  }
`;

export const StyledNavLink = styled(NavLink).attrs((props) => ({
  to: props.to.toLowerCase(),
}))`
  color: ${({ theme }) => theme.colors.white};
  display: block;
  padding: 20px 0;
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  display: flex;
  align-items: center;
  &::before {
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    margin-right: 25px;
    border-radius: 50%;
    background-color: ${({ theme, to }) => theme.colors[to]};
  }
  &::after {
    content: url(${Icon});
    display: block;
    margin-left: auto;
  }
`;
