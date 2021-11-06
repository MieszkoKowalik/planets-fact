import styled from "styled-components";

export const Wrapper = styled.button.attrs(({ isOpen = false }) => ({
  isOpen,
}))`
  background-color: transparent;
  border: none;
  cursor: pointer;

  path {
    transition: fill 0.3s;
    fill: ${({ theme, isOpen }) =>
      isOpen ? theme.colors.neutralDark : theme.colors.white};
  }
`;
