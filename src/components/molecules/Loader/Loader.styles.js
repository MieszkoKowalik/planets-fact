import styled, { keyframes } from "styled-components";

const Spin = keyframes`
to{transform:rotate(360deg)}`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Orbit = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.colors.neutralLight};
  border-radius: 50%;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  animation: ${Spin} ${({ time }) => `${time}s`} linear 0s infinite;
`;

export const Planet = styled.div`
  position: absolute;
  top: -5px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #3ff9dc;
`;

export const Sun = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #ffab91;
`;
