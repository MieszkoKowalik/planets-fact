import React, { useEffect } from "react";
import { useContext } from "react";
import { PlanetsContext } from "providers/PlanetsProviders";
import { useParams } from "react-router";
import { Wrapper } from "./PlanetImage.styles";
import { useState } from "react";
const PlanetImage = () => {
  const { currentPlanetData } = useContext(PlanetsContext);
  const { planet, id } = useParams();
  const [loading, setLoading] = useState(true);
  const imageLoaded = () => {
    setLoading(false);
  };

  const [imgId, setImgSrc] = useState("");
  const [planetId, setPlanetId] = useState("");

  useEffect(() => {
    if (imgId !== id) {
      setImgSrc(id);
      setLoading(true);
    }
    if (planet !== planetId) {
      setPlanetId(planet);
      setLoading(true);
    }
  }, [planet, planetId, id, imgId, loading]);
  console.log(imgId, planetId);
  return (
    <Wrapper planet={planetId}>
      {imgId === "geology" ? (
        <>
          <img
            style={{
              opacity: loading ? 0 : 1,
            }}
            src={currentPlanetData.images.planet}
            onLoad={imageLoaded}
            alt=""
          />
          <img
            style={{
              opacity: loading ? 0 : 1,
            }}
            src={currentPlanetData.images.geology}
            onLoad={imageLoaded}
            alt=""
          />
        </>
      ) : null}
      {imgId === "structure" ? (
        <img
          style={{
            opacity: loading ? 0 : 1,
          }}
          src={currentPlanetData.images.internal}
          onLoad={imageLoaded}
          alt=""
        />
      ) : null}
      {imgId === "overview" ? (
        <img
          style={{
            opacity: loading ? 0 : 1,
          }}
          src={currentPlanetData.images.planet}
          onLoad={imageLoaded}
          alt=""
        />
      ) : null}
    </Wrapper>
  );
};

export default PlanetImage;
