import styled from "styled-components";

export const Grid = styled.div`
  padding: 0 24px 30px;
  max-width: 1110px;
  margin: 0 auto;
  @media ${({ theme }) => theme.media.medium} {
    padding: 0 40px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 460px auto auto;
    display: grid;
    grid-template-areas:
      "image image"
      "info tabs"
      "details details";
  }
  @media ${({ theme }) => theme.media.large} {
    grid-template-columns: 1fr 350px;
    grid-template-rows: 550px;
    grid-template-areas:
      "image info"
      "image tabs"
      "details details";
  }
`;
