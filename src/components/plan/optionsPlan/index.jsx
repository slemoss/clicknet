import React from "react";
import { Plano, Icon, Info, Valor, Vantagens, Contratar } from "./styles";
import { BsCartCheckFill } from "react-icons/bs";
import Iicon from "./imgs/0.png";

export default function optionsPlan() {
  return (
      <Plano>
        <Icon src={Iicon} />
        <Info>Plano Básico 100 Megas</Info>
        <Valor>R$69,90</Valor>
        por mês
        <hr />
        <fieldset>
          <legend>Vantagens</legend>
          <Vantagens>
            100mbps de download <br />
            50mbps de upload <br />
            conexão fibra óptica <br />
          </Vantagens>
        </fieldset>
        <Contratar>
          Contratar{" "}
          <div>
            <BsCartCheckFill size={18} />
          </div>
        </Contratar>
      </Plano>
  );
}
