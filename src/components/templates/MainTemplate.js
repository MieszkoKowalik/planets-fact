import React from "react";
import { Wrapper } from "./MainTemplate.styles";
import Header from "components/organisms/Header/Header";
import PlanetsSection from "components/organisms/PlanetsSection/PlanetsSection";

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      {children}
      <PlanetsSection />
    </Wrapper>
  );
};

export default MainTemplate;
