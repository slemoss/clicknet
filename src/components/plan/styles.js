import styled from "styled-components";

export const Container = styled.div`
  *{
    color: white;
  }
  background: linear-gradient(#1B1B21, #808080);
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
