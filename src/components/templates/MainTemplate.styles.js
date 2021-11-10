import styled from "styled-components";
import bgStars from "assets/images/background-stars.svg";

export const Wrapper = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
  background-image: url(${bgStars});
  background-position: center;
`;
