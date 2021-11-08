import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  gap: 8px;
  @media ${({ theme }) => theme.media.medium} {
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
  }
`;
export const Detail = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.neutralDark};
  max-width: 255px;
  width: 100%;
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${({ theme }) => theme.media.medium} {
    flex-direction: column;
    align-items: flex-start;
    flex-basis: 24%;
    gap: 6px;
    padding: 16px 0 20px 15px;
  }
  @media ${({ theme }) => theme.media.large} {
    padding: 20px 0 27px 23px;
  }
  h3 {
    font-size: 8px;
    text-transform: uppercase;
    letter-spacing: 0.09125em;
    line-height: 25px;
    color: ${({ theme }) => theme.colors.neutralLight};
    @media ${({ theme }) => theme.media.large} {
      font-size: 11px;
    }
  }
  p {
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: -0.0375em;
    color: ${({ theme }) => theme.colors.white};
    @media ${({ theme }) => theme.media.medium} {
      font-size: 24px;
    }
    @media ${({ theme }) => theme.media.large} {
      font-size: 40px;
    }
  }
`;
