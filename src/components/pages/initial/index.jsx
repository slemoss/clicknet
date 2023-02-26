import React from "react";
import { Acessar, Container, Logo } from "./styles";
import LogoCk from './imgs/logo-nova.png'


export default function Initial() {
  const renatinha = () => {
    alert('Renatinha enlouqueceu')
  }
  return(
    <Container>
      
      <Logo src={LogoCk}/>
      <Acessar onClick={renatinha}> Acessar </Acessar>
      
    </Container>
  )
}