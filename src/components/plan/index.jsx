import React from "react";
import { Container } from "./styles";
import Planos from "./planos";
import Iicon from './imgs/0.png'
import Iicon1 from './imgs/1.png'
import Iicon2 from './imgs/2.png'
import Iicon3 from './imgs/4.png'

export default function Plan() {
  return (
    <Container>
      <Planos foto1={Iicon} valor={'69,90'} plano={100}/>
      <Planos foto1={Iicon1} valor={'89,90'} plano={200}/>
      <Planos foto1={Iicon2} valor={'99,90'} plano={300}/>
      <Planos foto1={Iicon3} valor={'129,90'} plano={500}/>
    </Container>
  );
}
