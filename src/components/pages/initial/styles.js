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
  width: 100vw;
  height: 100vh;

  background: linear-gradient(90deg, #101324 0%, #151930 40%, #101324 100%, #161B33);
  animation: ${shimmerEffect} 10s linear infinite;
  background-size: 300%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Logo = styled.img`
  width: 440px;
  height: 120px;
  @media (max-width: 480px) {
    width: 220px;
    height: 90px;
  }

  @media (min-width: 481px) and (max-width: 780px) {
    width: 300px;
    height: 110px;
  }

  @media (min-width: 781px) and (max-width: 1024px) {
    width: 380px;
    height: 120px;
  }
`;
export const Acessar = styled.button`
  width: 140px;
  height: 40px;
  border-radius: 10px;
  border-color: #cacaca;

  color: white;
  background-color: rgb(0, 0, 0, 0.15);

  font-size: 20px;

  margin: 55px;
`;
