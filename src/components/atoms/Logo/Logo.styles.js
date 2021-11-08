import styled from "styled-components";

export const Wrapper = styled.h1`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 28px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: -0.0375em;
`;
