import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 60px 0px 120px 0px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  background: linear-gradient(#1B1B21, #0B0F2F);
  color: white;

  @media (min-width: 801px) {
    height: 950px;
  }
  strong{ 
    color: red;
    }
`;
export const Titulo = styled.h1`
  font-size: 3em;
  color: whitesmoke;

  //telas maiores
  //font-size: 3.5em;
`;
export const SubTitulo = styled.h2`
  font-size: 1em;
  width: 310px;
`;
export const SubTituloF = styled.h2`
  font-size: 1em;
  margin-top: 50px;
`;
export const AreaTexto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: 15px;

  background: #101324;
  border-radius: 30px;
  border: 1px solid whitesmoke;

  text-align: justify;
`;
export const Paragrafo = styled.p`
  strong {
    font-weight: 900;
  }
`;
export const Area1 = styled.div`
  width: 345px;
  padding: 33px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  // fazer o media da tela grande
  @media (min-width: 801px) {
    flex-direction: row;
  }
`;
export const Area2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  // fazer o media da tela grande
  @media (min-width: 801px) {
    flex-direction: row;
  }
`;
