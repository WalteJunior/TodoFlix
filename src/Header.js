import React from 'react';
import seta from './assent/seta.svg';
import icone from './assent/Icone-perfil.svg';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const Boxh1 = styled.h1` 
 position:relative;
 display:inline-block;
 color: red;
 left: 4vw;
 top:-2vh;
 width:12vw;
 height:6vh;
 cursor:pointer;

 p{
  position:absolute;
  display:inline-block;
  color:white;
  width:3vw;
  left:15vw;
  margin-right:10px;
  top:0.3vh;
  font-size:1vw;
 }
 p:hover{
  cursor:pointer;
 }
 nav{
  position:relative;
  display:inline-block;
  color:white;
  width:6.5vw;
  height:19vh;
  left:20vw;
  bottom:7.7vh;
  font-size:1vw;
 }
 nav:hover>ul{
  cursor:pointer;
  display:block;
 }
 ul{
  position:absolute;
  display:none;
  list-style:none;
  left:-0.5vw;
  z-index:5;
  background-color:black;
 }
 li{
  position:relative;
  right:3vw;
  border:1px;
  margin:7px;
 }
 
 img{
  position:absolute;
  top:-0.3vh;
 }
`
const Anchor = styled(Link)`
  text-decoration:none;
  color:white;

  &:hover{
    color:red;
  }
`
const Button = styled.button`
 position:relative;  
  display:inline-block;
  width:vw;
  left:34vw;
  bottom:8vh;
  padding: 0.25em 1em;
  background-color: red;
  border-radius: 3px;
  border: 2px solid red;
  color: white;
  cursor:pointer;
`
const Search = styled.input`
  position:absolute;
  width:30vw;
  height:4vh;
  margin-left:35vw;
  top:4vh;
  background-color:#2C2C2C;
  border-radius:4px;
  border:2px solid #2C2C2C;
`
const Conteiner = styled.div`
 position:relative;
 width:9vw;
 height:25vh;
 bottom:13vh;
 left:87.8vw;
`
const Foto = styled.img`
 position:absolute;
 bottom:vh;
 padding-right:2vw;
 left:vw;
`
const Perfil = styled.img`
 position:relative;
 bottom:52vh;
 padding-right:2vw;
 left:70vw;
`
const Login = styled.img`
 position:absolute;
 left:2.5vw;
`
const List = styled.ul`
 position:absolute;
 display:noe;
 width:7vw;
 bottom:2vh;
 left:15vw;
 li{
  position:relative;
  list-style:none;
  color:white;
 }
`
const Option = styled.li`
 position:relative;
 width:5vw;
 bottom:67.5vh;
 margin-bottom:2vh;
 padding-left:3vw;
 left:70vw;
 color:white;
 Cursor:pointer;
`
export default class test extends React.Component {
  render(){
    return(
      <div>
      <Boxh1>TODOFLIX
      <p><Anchor to='/inicio'>Inicio</Anchor></p>
      <nav>Categorias
        <img src={seta} alt=""/>
        <ul>
          <li><Anchor to='/todos'>Todos</Anchor></li>
          <li><Anchor to='/fav'>Favoritos</Anchor></li>
          <li><Anchor to='/ver'>Já vistos</Anchor></li>
          <li><Anchor to='/adic'>Adicionados</Anchor></li>
        </ul>
      </nav>
      </Boxh1>
      <Button>Adicionar filme</Button>
      <Search type="text" placeholder="Pesquisar"/>
      <Conteiner>
      <Foto src={icone} alt=""/>
      <Login src={seta} alt=""/>
      </Conteiner>
      <List>
          <li><Perfil src={icone} alt=""/></li>
          <li><Perfil src={icone} alt=""/></li>
          <li><Perfil src={icone} alt=""/></li>
          <Option>Walter</Option>
          <Option>Dan</Option>
          <Option>Fernando</Option>
        </List>
      </div>
    )
  }
}