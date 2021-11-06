import styled from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutralDark};
  position: relative;
`;
