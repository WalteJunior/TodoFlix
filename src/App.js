import React, { Component } from 'react'
import styled from 'styled-components'
import {createGlobalStyle} from 'styled-components'
import seta from './assent/seta.svg'
import icone from './assent/Icone-perfil.svg'

const GlobalStyle = createGlobalStyle`
body{
  background-color: black
}
`
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
  position:absolute;
  display:inline-block;
  color:white;
  width:6.5vw;
  left:20vw;
  bottom:1vh;
  font-size:1vw;
}
nav:hover>ul{
  cursor:pointer;
  display:block;
}
ul{
  position:absolute;
  display:noe;
  list-style:none;
  left:-0.5vw;
}
li{
  position:relative;
  right:3vw;
  border:1px;
  margin:7px;
}
li:hover{
  cursor:pointer;
  color:red;
}
img{
  position:absolute;
  top:-0.3vh;
}
`
const Button = styled.button`
  position:relative;  
  display:inline-block;
  width:vw;
  left:36vw;
  bottom:2vh;
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
  margin-left:37vw;
  top:4vh;
  background-color:#2C2C2C;
  background-image:url("./assent/lupa.svg");
  background-repeat: no-repeat;
  border-radius:4px;
  border:2px solid #2C2C2C;
  opacity:1;
`
const Perfil = styled.img`
position:relative;
padding-right:2vw;
left:70vw;
`
const Login = styled.img`
position:absolute;
top:4vh;
left:93.5vw;
Login:hover>ul{
  cursor:pointer;
  display:block;
}
`

class App extends Component {
  render(){
    return(
      <div>
      <GlobalStyle/>
      <Boxh1>TODOFLIX
      <p>Inicio</p>
      <nav>Categorias
        <img src={seta} alt=""/>
        <ul>
          <li>Todos</li>
          <li>Favoritos</li>
          <li>Já vistos</li>
          <li>Adicionados</li>
        </ul>
      </nav>
      </Boxh1>
      <Button>Adicionar filme</Button>
      <Search type="text" placeholder="Pesquisar"/>
      <Perfil src={icone} alt=""/>
      <Login src={seta} alt="">
      <ul>
          <li><Perfil src={icone} alt=""/>Walter</li>
          <li><Perfil src={icone} alt=""/>Dan</li>
          <li><Perfil src={icone} alt=""/>Fernando</li>
        </ul>
      </Login>
      </div>
    )
  }
}

export default App