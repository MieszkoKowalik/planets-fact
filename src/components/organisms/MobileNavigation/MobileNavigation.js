import React from "react";
import MobileNavList from "components/molecules/MobileNavList/MobileNavList";
import HamburgerButton from "components/atoms/HamburgerButton/HamburgerButton";
import { useContext } from "react";
import { PlanetsContext } from "providers/PlanetsProviders";

const MobileNavigation = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(PlanetsContext);
  const closeNavigation = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav>
      <HamburgerButton
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
        id="menubutton"
        aria-haspopup="true"
        aria-expanded={isMenuOpen}
        isOpen={isMenuOpen}
        aria-label="Menu toggle"
      />
      {isMenuOpen ? (
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
