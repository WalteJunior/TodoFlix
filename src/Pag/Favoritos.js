import React from 'react';
import styled from 'styled-components';
import heart from './assent/Coração.svg';
import like from './assent/Like.svg';
import marvel from './assent/endgame-1.webp';
import anti from './assent/tom-hardy-em-venom-1280x720_5egb.h720.webp';
import hero from './assent/liga.jpg'

const Mom = styled.div`
display:flex;
flex-direction:column;
width:100%;
`
const Tilt = styled.h1`
 position:relative;
 bottom: 25vh;
 left: 54px;
 width: 5vw;
 height: 32px;
 text-align: left;
 font: normal normal normal 29px/33px Arial;
 color:white;
`
const Search = styled.input`
  position:absolute;
  width:30vw;
  height:4vh;
  margin-left:55.6vw;
  top:4vh;
  background-image: url("../../projeto/src/assent/lupa.svg");
  background-color:#2C2C2C;
  border-radius:4px;
  border:2px solid #2C2C2C;
`
const Subcont = styled.div`
display:flex;
flex-wrap:wrap;
width:100%;
`
const Cont = styled.div` 
position:relative;
display:flex;
flex-wrap:wrap;
width:20vw;
margin-left:2vw;
h2{
  width:20vw;
  color:white;
 }
 img{
   width:20vw;
   heigth:10vh;
 }
p{
  width:18vw;
  bottom:vh;
  color:white;
 }
`
const Vl = styled.h4`
width:5vw;
color:white;
img{
  width:1.5vw;
}
`
export default class test extends React.Component{
  state ={
    filme:[
    {
      titulo:'Avengers-Endgame',
      poster: marvel,
      descrisao:'Após Thanos eliminar metade das criaturas vivas, os Vingadores têm de lidar com a perda de amigos e entes queridos. Com Tony Stark vagando perdido no espaço sem água e comida, Steve Rogers e Natasha Romanov lideram a resistência contra o titã louco.',
      nota: 5,
      fedd: like
    },
    {
      titulo:'Venom ',
      poster: anti,
      descrisao:'O jornalista Eddie Brock desenvolve força e poder sobre-humanos quando seu corpo se funde com o alienígena Venom. Dominado pela raiva, Venom tenta controlar as novas e perigosas habilidades de Eddie.',
      nota: 5,
      fedd: like
    },
    {
      titulo:'Liga da Justiça',
      poster: hero,
      descrisao:'Impulsionado pela restauração de sua fé na humanidade e inspirado pelo ato altruísta do Superman, Bruce Wayne convoca sua nova aliada Diana Prince para o combate contra um inimigo ainda maior, recém-despertado.',
      nota: 5,
      fedd: like
    },
   ],
   filter:[]
  }
  async componentDidMount(){
    this.movies()
  }
  movies=async()=>{
    const Qualquer = this.setState({filter:this.state.filme})
  }
  random=(e)=>{
    if(e.target.value === ""){this.setState({filter:this.state.filme})
  return
  }
  const Convert = this.state.filme.filter((item) => {
    if(item.titulo.toLowerCase().includes(e.target.value.toLowerCase())){
      return true
    }
  })
  this.setState({filter:Convert})
  }
    render(){
        return(
            <Mom>
                <Tilt>Favoritos</Tilt>
                <Search type="text" placeholder="Pesquisar" onChange={this.random}/>
                <Subcont>
                 {this.state.filter.map((item)=>(
                  <Cont>
                    <img src={item.poster} alt=""/>
                    <h2>{item.titulo}</h2>
                    <p>{item.descrisao}</p>
                    <Vl>{item.nota}/5 <img src={item.fedd} alt=""/></Vl>
                  </Cont>
                 ))}
                </Subcont>
            </Mom>
        )
    }
}