import { display } from "@mui/system";
import { keyframes } from "styled-components";
import styled  from "styled-components";


export const Container = styled.div`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  //
`
export const Card = styled.div`
  //
  position: relative;
  background: #101324;
  margin: 10px;
  width: 150px;
  height: 50px;
  border-radius: 7px;
  overflow: hidden;

  
  display: flex;
  justify-content: center;
  align-items: center;

  span:first-of-type{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, transparent, white);
    animation: borda 2s linear infinite;
  }
  @keyframes borda{
    0%{
      transform: translateX(-100%);
    }
    100%{
      transform: translateX(100%);
    }
  }

  span:nth-of-type(2){
    position: absolute;
    top: 0;
    right: 0;
    width: 1px;
    height: 100%;
    background: linear-gradient(to bottom, transparent, white);
    animation: borda2 2s linear infinite;
    animation-delay: 1s;
  }
  @keyframes borda2{
    0%{
      transform: translateY(-100%);
    }
    100%{
      transform: translateY(100%);
    }
  }
  span:nth-of-type(3){
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(to left, transparent, white);
    animation: borda3 2s linear infinite;
  }
  @keyframes borda3{
    0%{
      transform: translateX(100%);
    }
    100%{
      transform: translateX(-100%);
    }
  }
  span:nth-of-type(4){
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 100%;
    background: linear-gradient(to top, transparent, white);
    animation: borda4 2s linear infinite;
    animation-delay: 1s;
  }
  @keyframes borda4{
    0%{
      transform: translateY(100%);
    }
    100%{
      transform: translateY(-100%);
    }
  }
  
`