import React from "react";
import { Plano, Icon, Info, Valor, Contratar, Vantagens } from "./styles";
import {BsCartCheckFill} from 'react-icons/bs'

export default function Planos({foto1, valor, plano}){
  return(
    <Plano>
          <Icon src={foto1}/>
          <Info>
            Plano Básico {plano} Megas
          </Info>
          <Valor>R${valor}</Valor>
          por mês
          <hr/>

          <fieldset>
          <legend>Vantagens</legend>
          <Vantagens>
           {plano}mbps de download <br/>
            {plano/2}mbps de upload <br/>
            conexão fibra óptica <br/>
          </Vantagens>

          </fieldset>
          
          <Contratar>Contratar <div><BsCartCheckFill size={18}/></div></Contratar>
        </Plano>
  )
}