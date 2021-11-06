import React from "react";
import { Wrapper } from "./NavBar.styles";
import MobileNavigation from "components/organisms/MobileNavigation/MobileNavigation";
import Logo from "components/atoms/Logo/Logo";
const NavBar = () => {
  return (
    <Wrapper>
      <Logo />
      <MobileNavigation></MobileNavigation>
    </Wrapper>
  );
};

export default NavBar;
