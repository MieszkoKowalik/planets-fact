import React from "react";
import { useParams } from "react-router";

import { Navigate } from "react-router-dom";
import { Wrapper, Tab } from "./Tabs.styles";
const Tabs = () => {
  const currentPath = useParams();
  const tabs = [
    {
      id: 1,
      name: "overview",
      path: "overview",
    },
    {
      id: 2,
      name: "structure",
      path: "structure",
    },
    {
      id: 3,
      name: "surface",
      path: "surface",
    },
  ];

  return (
    <Wrapper>
      {!currentPath["*"] && <Navigate to="overview" />}
      {tabs.map((tab) => (
        <Tab
          key={tab.id}
          id={tab.id < 10 ? "0" + tab.id : tab.id}
          planet={currentPath.planet}
          to={tab.path}
        >
          {tab.name}
        </Tab>
      ))}
    </Wrapper>
  );
};

export default Tabs;
