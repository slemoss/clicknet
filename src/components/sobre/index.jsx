import {
  AreaTexto,
  Container,
  Paragrafo,
  SubTitulo,
  SubTituloF,
  Titulo,
  Area1,
  Area2,
  CaixaBase,
} from "./styles";
import CaixaMenor from "./caixaMenor";

export default function Sobre() {
  return (
    <Container>
      <Titulo>SOBRE NÓS</Titulo>
      <SubTitulo>
        Por que escolher a <strong>Click Net ?</strong>
      </SubTitulo>
      <SubTitulo>
        Compromisso em oferecer excelência em telecomunicações
      </SubTitulo>

      <Area1>
        <AreaTexto>
          <SubTitulo>Agilidade e excelência é a chave</SubTitulo>
          <Paragrafo>
            Somos um provedor que nasceu em 2015, através de uma demanda para
            atender apenas amigos locais que necessitavam de um bom sinal de
            internet, através desta oportunidade o projeto se expandiu de uma
            forma exponencial e a cada dia ganha mais espaço.
            <br />
            <br />A agilidade e a excelência no atendimento das demandas de um
            mercado cada vez mais exigente e a busca constante por superar
            expectativas, fazem da <strong>CLICK NET</strong> a escolha certa
            para quem precisa realmente de um serviço eficiente.
          </Paragrafo>
        </AreaTexto>
        /// img tatata
      </Area1>
      <SubTitulo>Nossas bases são</SubTitulo>


      <Area2>
        <CaixaMenor bases='Comprometimento'></CaixaMenor>
        <CaixaMenor bases='Determinação'></CaixaMenor>
        <CaixaMenor bases='Eficiência'></CaixaMenor>
      </Area2>
      <SubTituloF>Muito além da conexão à internet</SubTituloF>
    </Container>
    
  );
}
