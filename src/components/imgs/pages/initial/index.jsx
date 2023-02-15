import React from "react";
import { Acessar, Container, Logo } from "./styles";
import LogoCk from './imgs/logo-nova.png'


export default function Initial() {
  return(
    <Container>
      <Logo src={LogoCk}/>
      <Acessar> Acessar </Acessar>
    </Container>
  )
}