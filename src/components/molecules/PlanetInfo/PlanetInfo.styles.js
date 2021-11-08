import styled from "styled-components";
import SrcIcon from "assets/images/icon-source.svg";

export const Wrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${({ theme }) => theme.media.medium} {
    text-align: left;
    align-items: flex-start;
  }
  h2 {
    margin-bottom: 16px;
    font-family: ${({ theme }) => theme.fonts.primary};
    color: ${({ theme }) => theme.colors.white};
    font-weight: 500;
    font-size: 40px;
    text-transform: uppercase;
    @media ${({ theme }) => theme.media.medium} {
      margin-bottom: 24px;
      font-size: 48px;
    }
    @media ${({ theme }) => theme.media.large} {
      font-size: 80px;
    }
  }
  p {
    max-width: 50ch;
    margin-bottom: 32px;
    color: ${({ theme }) => theme.colors.white};
    font-size: 11px;
    line-height: 2;
    @media ${({ theme }) => theme.media.large} {
      margin-bottom: 24px;
      font-size: 14px;
      line-height: 1.78;
    }
  }
  cite {
    color: ${({ theme }) => theme.colors.neutralLight};
    font-size: 12px;
    font-style: normal;
    @media ${({ theme }) => theme.media.large} {
      margin-bottom: 24px;
      font-size: 14px;
    }
  }
  a {
    color: ${({ theme }) => theme.colors.neutralLight};
    font-weight: bold;
    &::after {
      content: url(${SrcIcon});
      margin-left: 4px;
      @media ${({ theme }) => theme.media.large} {
        margin-left: 8px;
      }
    }
  }
`;
