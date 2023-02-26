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
`
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

  background: linear-gradient(90deg, #101324 0%, #151930 40%, #101324 100%, #161B33);
  animation: ${shimmerEffect} 10s linear infinite;
  background-size: 300%;

  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  fieldset {
    border-radius: 15px;
    background: linear-gradient(#1B1B21, #808080);
  }
`;
export const Icon = styled.img`
  width: 4em;
  height: 4em;
  margin: 1em auto;
`;
export const Info = styled.h2`
  color: whitesmoke;
  font-size: 1.7em;
  text-align: center;
  padding: 0 2.2em;
  margin: 0 0 7px 0;

  @media (min-width: 1281px) {
    padding: 0 0.9em;
  }
`;
export const Valor = styled.h1`
  color: #DB0000;
  font-size: 3em;
  text-align: center;
  margin: 0;
`;
export const Contratar = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10em;
  height: 3em;
  margin: 1.5em auto;
  position: relative;
  border: 2px solid black;

  border-radius: 7px;
  background: linear-gradient(90deg, #DB0000, #750000, #DB0000);
  background-size: 200%;
  animation: ${shimmerEffect} 10s linear infinite;
  padding: 0;

  div {
    position: absolute;
    right: 0.1px;
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
