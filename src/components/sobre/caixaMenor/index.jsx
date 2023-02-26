import React from "react";
import { Container, Card } from "./styles";

export default function CaixaMenor({bases}){
  return (
    <>
    <Container>

      <Card>
        <p>{bases}</p>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </Card>


    </Container>
    </>
  )
}