import React from "react";

import { Wrapper } from "./MainTemplate.styles";
import NavBar from "components/organisms/NavBar/NavBar";

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <NavBar />
      {children}
    </Wrapper>
  );
};

export default MainTemplate;
