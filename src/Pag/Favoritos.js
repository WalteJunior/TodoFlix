import React from 'react';
import styled from 'styled-components';
import marvel from './assent/endgame-1.webp';
import anti from './assent/tom-hardy-em-venom-1280x720_5egb.h720.webp';
import hero from './assent/liga.jpg'
import heart from './assent/Coração.svg';
import like from './assent/Like.svg';

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
const Avenger = styled.div`
    position:relative;
    display:inline-block;
    width:15vw;
    bottom:15vh;
    margin-right:8vw;
    left:3vw;
    h3{
        position:relative;
        width:19vw;
        height:7vh;
        bottom:3vh;
        color:white;
        font-size:16px;
    }
    t{
        position:relative;
        display:inline-block;
        margin-left:3vw;
        color:white;
    }
    desc{
        position:absolute;
        width:18vw;
        top:30vh;
        color:white;
    }
`
const Venom = styled.div`
    position:relative;
    display:inline-block;
    width:15vw;
    bottom:15vh;
    margin-right:7vw;
    h3{
        position:relative;
        width:19vw;
        height:7vh;
        bottom:3vh;
        color:white;
        font-size:16px;
    }
    t{
        position:relative;
        display:inline-block;
        margin-left:3vw;
        color:white;
    }
    tvm{
        position:relative;
        display:inline-block;
        margin-left:10vw;
        color:white;
    }
    desc{
        position:absolute;
        width:18vw;
        top:30vh;
        color:white;
    }
`
const Dc = styled.div`
    position:relative;
    display:inline-block;
    width:15vw;
    bottom:15vh;
    margin-right:5vw;
    h3{
        position:relative;
        width:19vw;
        height:7vh;
        bottom:3vh;
        color:white;
        font-size:16px;
    }
    t{
        position:relative;
        display:inline-block;
        margin-left:3vw;
        color:white;
    }
    desc{
        position:absolute;
        width:18vw;
        top:30vh;
        color:white;
    }
`
const Vingador = styled.img`
  width:17vw;
  border-radius:10px;
`
const Gosma = styled.img`
  width:20vw;
  border-radius:10px;
`
const Syder = styled.img`
  width:17vw;
  border-radius:10px;
`
const Fav6 = styled.img`
  position:absolute;
  top:1vh;
  margin-left:15vw;
`
const Fav7 = styled.img`
  position:absolute;
  top:1vh;
  margin-left:18vw;
`
  const Fav8 = styled.img`
  position:absolute;
  top:1vh;
  margin-left:15vw;
`
export default class test extends React.Component{
    render(){
        return(
            <div>
                 <Tilt>Favoritos</Tilt>
                <Avenger>
                   <Vingador src={marvel} alt=""/><Fav6 src={heart} alt=""/>
                   <h3>Avengers-Endgame<t>5/5 <img src={like} alt=""/></t></h3>
                   <desc>Após Thanos eliminar metade das criaturas vivas, os Vingadores têm de lidar com a perda de amigos e entes queridos. Com Tony Stark vagando perdido no espaço sem água e comida, Steve Rogers e Natasha Romanov lideram a resistência contra o titã louco.</desc>
                </Avenger>
                <Venom>
                   <Gosma src={anti} alt=""/><Fav7 src={heart} alt=""/>
                   <h3>Venom <tvm>5/5 <img src={like} alt=""/></tvm></h3>
                   <desc>O jornalista Eddie Brock desenvolve força e poder sobre-humanos quando seu corpo se funde com o alienígena Venom. Dominado pela raiva, Venom tenta controlar as novas e perigosas habilidades de Eddie.</desc>
                </Venom>
                <Dc>
                   <Syder src={hero} alt=""/><Fav8 src={heart} alt=""/>
                   <h3>Liga da Justiça <t>5/5 <img src={like} alt=""/></t></h3>
                   <desc>Impulsionado pela restauração de sua fé na humanidade e inspirado pelo ato altruísta do Superman, Bruce Wayne convoca sua nova aliada Diana Prince para o combate contra um inimigo ainda maior, recém-despertado.</desc>
                </Dc>
            </div>
        )
    }
}