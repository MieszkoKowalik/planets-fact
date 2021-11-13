import React from "react";
import { Wrapper, Orbit, Planet, Sun } from "./Loader.styles";

const Loader = () => {
  return (
    <Wrapper>
      <Orbit size="165" time="10">
        <Planet></Planet>
        <Orbit size="125" time="7">
          <Planet></Planet>
          <Orbit size="75" time="3">
            <Planet></Planet>
            <Sun></Sun>
          </Orbit>
        </Orbit>
      </Orbit>
    </Wrapper>
  );
};

export default Loader;
