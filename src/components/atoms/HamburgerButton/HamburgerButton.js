import React from "react";
import { ReactComponent as HamburgerIcon } from "assets/images/icon-hamburger.svg";
import { Wrapper } from "./HanburgerButton.styles";
const HamburgerButton = (props) => {
  return (
    <Wrapper {...props}>
      <HamburgerIcon />
    </Wrapper>
  );
};

export default HamburgerButton;
