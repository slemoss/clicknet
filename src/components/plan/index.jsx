import React from "react";
import { Plano, Container, Icon, Info, Valor, Contratar, Vantagens } from "./styles";
import Iicon from './imgs/0.png'
import {BsCartCheckFill} from 'react-icons/bs'

export default function Plan(){
  return(
      <Container>
        <Plano>
          <Icon src={Iicon}/>
          <Info>
            Plano Básico 100 Megas
          </Info>
          <Valor>R$69,90</Valor>
          por mês
          <hr/>

          <fieldset>
          <legend>Vantagens</legend>
          <Vantagens>
            100mbps de download <br/>
            50mbps de upload <br/>
            conexão fibra óptica <br/>
          </Vantagens>

          </fieldset>
          
          <Contratar>Contratar <div><BsCartCheckFill size={18}/></div></Contratar>
        </Plano>
        <Plano>
          <Icon src={Iicon}/>
          <Info>
            Plano Básico 100 Megas
          </Info>
          <Valor>R$69,90</Valor>
          por mês
          <hr/>

          <fieldset>
          <legend>Vantagens</legend>
          <Vantagens>
            100mbps de download <br/>
            50mbps de upload <br/>
            conexão fibra óptica <br/>
          </Vantagens>

          </fieldset>
          
          <Contratar>Contratar <div><BsCartCheckFill size={18}/></div></Contratar>
        </Plano>
        <Plano>
          <Icon src={Iicon}/>
          <Info>
            Plano Básico 100 Megas
          </Info>
          <Valor>R$69,90</Valor>
          por mês
          <hr/>

          <fieldset>
          <legend>Vantagens</legend>
          <Vantagens>
            100mbps de download <br/>
            50mbps de upload <br/>
            conexão fibra óptica <br/>
          </Vantagens>

          </fieldset>
          
          <Contratar>Contratar <div><BsCartCheckFill size={18}/></div></Contratar>
        </Plano>
        <Plano>
          <Icon src={Iicon}/>
          <Info>
            Plano Básico 100 Megas
          </Info>
          <Valor>R$69,90</Valor>
          por mês
          <hr/>

          <fieldset>
          <legend>Vantagens</legend>
          <Vantagens>
            100mbps de download <br/>
            50mbps de upload <br/>
            conexão fibra óptica <br/>
          </Vantagens>

          </fieldset>
          
          <Contratar>Contratar <div><BsCartCheckFill size={18}/></div></Contratar>
        </Plano>
      </Container>
  )
}