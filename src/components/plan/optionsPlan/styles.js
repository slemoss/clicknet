import styled, { keyframes } from "styled-components";

const shimmerEffect = keyframes`
  0% {
    background-position: 0%;
  }
  25% {
    background-position: -50%;
  }
  50% {
    background-position: -100%;
  }
  75% {
    background-position: -150%;
  }
  100% {
    background-position: -200%;
  }
`;

export const Plano = styled.div`
  width: 300px;
  height: 550px;

  @media (min-width: 481px) {
    width: 290px;
    height: 550px;
    margin: 50px;
  }
  @media (min-width: 990px) {
    margin: 100px;
  }
  @media (min-width: 1281px) {
    width: 250px;
    margin: 30px;
  }

  border-radius: 30px;

  background: linear-gradient(
    90deg,
    #101324 0%,
    #151930 40%,
    #101324 100%,
    #161b33
  );
  animation: ${shimmerEffect} 10s linear infinite;
  background-size: 300%;

  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  fieldset {
    border-radius: 15px;
    background: linear-gradient(#1b1b21, #808080);
  }
`;

export const Icon = styled.img`
  width: 4em;
  height: 4em;
  margin: 1em auto;
`;
export const Valor = styled.h1`
  color: red;
  font-size: 3em;
  text-align: center;
  margin: 0;
`;
export const Info = styled.h2`
  color: #00b6ff;
  font-size: 1.7em;
  text-align: center;
  padding: 0 2.2em;
  margin: 0 0 7px 0;
`;
export const Contratar = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 10em;
  height: 3em;
  margin: 1.5em auto;

  border-radius: 7px;
  background: linear-gradient(90deg, #db0000, #750000, #db0000);
  background-size: 200%;
  animation: ${shimmerEffect} 10s linear infinite;
  padding: 0;

  div {
    border-radius: 0 5px 5px 0;
    width: 40px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const Vantagens = styled.p`
  text-align: center;
  line-height: 2.1em;
`;