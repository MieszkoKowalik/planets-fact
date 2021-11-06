import React from "react";
import { Wrapper, ViewWrapper } from "./NavBar.styles";
import MobileNavigation from "components/organisms/MobileNavigation/MobileNavigation";
import Logo from "components/atoms/Logo/Logo";
import { useMediaQuery } from "hooks/useMediaQuery";
import { useTheme } from "styled-components";
import DesktopNavigation from "components/molecules/DesktopNavigation/DesktopNavigation";
const NavBar = () => {
  const theme = useTheme();
  const isDisplayMedium = useMediaQuery(theme.media.medium);

  return (
    <Wrapper>
      <ViewWrapper>
        <Logo />
        {isDisplayMedium ? (
          <DesktopNavigation />
        ) : (
          <MobileNavigation></MobileNavigation>
        )}
      </ViewWrapper>
    </Wrapper>
  );
};

export default NavBar;
