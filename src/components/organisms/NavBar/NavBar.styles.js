import styled from "styled-components";

export const ViewWrapper = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${({ theme }) => theme.media.medium} {
    flex-direction: column;
  }
  @media ${({ theme }) => theme.media.large} {
    flex-direction: row;
    height: 100%;
  }
`;

export const Wrapper = styled.header`
  padding: 16px 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutralDark};
  position: relative;

  @media ${({ theme }) => theme.media.medium} {
    padding: 32px 52px 27px;
  }

  @media ${({ theme }) => theme.media.large} {
    flex-direction: row;
    height: 85px;
    padding: unset;
    padding-left: 32px;
    padding-right: 32px;
  }
`;
