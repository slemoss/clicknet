import styled, { keyframes } from "styled-components";

const shimmerEffect = keyframes`
  0% {
    background-position: 0%;
  }
  50% {
    background-position: -50%;
  }
  75% {
    background-position: -200%;
  }
  100% {
    background-position: -300%;
  }
`;

export const Container = styled.div`
  background: linear-gradient(
    90deg,
    #101324 0%,
    #151930 40%,
    #101324 100%,
    #161b33
  );
  animation: ${shimmerEffect} 10s linear infinite;
  background-size: 300%;

  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: start;
`;
export const Logo = styled.img`
  position: absolute;
  left: 10px;
  top: 10px;
  width: 100px;
  height: 40px;
`;
export const Acessar = styled.button`
  margin: 15px 30px;
  width: 140px;
  height: 40px;
  border-radius: 10px;
  border-color: #cacaca;

  color: white;
  background-color: rgb(0, 0, 0, 0.15);

  font-size: 20px;
`;
