import React, { Component } from 'react'
import styled from 'styled-components'
import {createGlobalStyle} from 'styled-components'
import seta from './assent/seta.svg'

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
width:35vw;
height:6;

p{
  position:relative;
  display:inline-block;
  color:white;
  width:6vw;
  left:2vw;
  bottom:1vh;
  font-size:1vw;
}
nav{
  position:relative;
  display:inline-block;
  color:white;
  width:11vw;
  left:2vw;
  bottom:1vh;
  font-size:1vw;
}
img{
  position:relative;
  top:1.2vh;
}
`
const Button = styled.button`
  position:relative;  
  display:inline-block;
  width:vw;
  left:13vw;
  bottom:2vh;
  padding: 0.25em 1em;
  background-color: red;
  border-radius: 3px;
  border: 2px solid red;
  color: white;
  
`
const Search = styled.input`
  position:absolute;
  width:30vw;
  left:11vw;
  bottom:0.2vh;
  background-color:#2C2C2C;
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
      </nav>
      </Boxh1>
      <Button>Adicionar filme</Button>
      <input type="text" placeholder="Pesquisar" imagebackground source={require("./assent/lupa.svg")}/>
      </div>
    )
  }
}

export default App