import React from "react";
import { useState } from "react";
import MobileNavList from "components/molecules/MobileNavList/MobileNavList";
import HamburgerButton from "components/atoms/HamburgerButton/HamburgerButton";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeNavigation = () => {
    setIsOpen(false);
  };

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
        aria-label="Menu toggle"
      />
      {isOpen ? (
        <MobileNavList
          click={closeNavigation}
          id="menu"
          aria-labelledby="menubutton"
        />
      ) : null}
    </nav>
  );
};

export default MobileNavigation;
