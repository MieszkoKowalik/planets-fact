import styled from "styled-components";

const sizes = {
  small: {
    mercury: "111px",
    venus: "154px",
    earth: "173px",
    mars: "129px",
    jupiter: "224px",
    saturn: "256px",
    uranus: "176px",
    neptune: "173px",
  },
  medium: {
    mercury: "184px",
    venus: "253px",
    earth: "285px",
    mars: "213px",
    jupiter: "369px",
    saturn: "422px",
    uranus: "290px",
    neptune: "285px",
  },
  large: {
    mercury: "290px",
    venus: "400px",
    earth: "450px",
    mars: "336px",
    jupiter: "582px",
    saturn: "666px",
    uranus: "458px",
    neptune: "450px",
  },
};

export const Wrapper = styled.div.attrs(({ planet: planetId }) => ({
  planet: planetId,
}))`
  grid-area: image;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 304px;
  position: relative;
  img {
    width: ${({ planet }) => sizes.small[planet]};
    @media ${({ theme }) => theme.media.medium} {
      width: ${({ planet }) => sizes.medium[planet]};
    }
    @media ${({ theme }) => theme.media.large} {
      width: ${({ planet }) => sizes.large[planet]};
    }
  }
  img + img {
    position: absolute;
    top: 78%;
    left: 50%;
    width: 100px;
    transform: translate(-50%, -50%);
    @media ${({ theme }) => theme.media.medium} {
      width: 130px;
    }
    @media ${({ theme }) => theme.media.large} {
      width: 163px;
    }
  }
`;
