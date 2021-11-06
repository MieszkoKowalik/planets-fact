import React from "react";
import { useState } from "react";
import Navigation from "components/molecules/Navigation/Navigation";
import HamburgerButton from "components/atoms/HamburgerButton/HamburgerButton";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);
  return (
    <nav>
      <HamburgerButton
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        id="menubutton"
        aria-haspopup="true"
        aria-expanded={isOpen}
        isOpen={isOpen}
      />
      {isOpen ? <Navigation id="menu" aria-labelledby="menubutton" /> : null}
    </nav>
  );
};

export default MobileNavigation;
