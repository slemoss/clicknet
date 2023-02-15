import styled from "styled-components";

export const Container = styled.div`
  background-color: #101324;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 481px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
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

  background-color: #cacaca;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  fieldset {
    strong {
      color: orange;
    }
    border-radius: 15px;
    background-color: gray;
  }
`;
export const Icon = styled.img`
  width: 4em;
  height: 4em;
  margin: 1em auto;
`;
export const Info = styled.h2`
  color: #00b6ff;
  font-size: 1.7em;
  text-align: center;
  padding: 0 2.2em;
  margin: 0 0 7px 0;

  @media (min-width: 1281px) {
    padding: 0 0.9em;
  }
`;
export const Valor = styled.h1`
  color: red;
  font-size: 3em;
  text-align: center;
  margin: 0;
`;
export const Contratar = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 10em;
  height: 3em;
  margin: 1.5em auto;

  border-radius: 7px;
  background-color: #ffd22c;
  padding: 0;

  div {
    border-radius: 0 5px 5px 0;
    background-color: #e8a71c;
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
