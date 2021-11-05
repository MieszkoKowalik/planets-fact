import styled from "styled-components";

export const Wrapper = styled.header``;

export const Logo = styled.h1`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 28px;
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: -0.0375em;
`;
