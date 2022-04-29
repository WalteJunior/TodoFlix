import React from 'react';
import styled from 'styled-components';
import heart from './assent/Coração.svg';
import like from './assent/Like.svg';
import sherek from './assent/Sherek.png';
import today from './assent/hoje.png';
import miranha from './assent/Miranha.png';
import dream from './assent/Sonho.png';
import time from './assent/horas.png';
import marvel from './assent/endgame-1.webp';
import anti from './assent/tom-hardy-em-venom-1280x720_5egb.h720.webp';
import hero from './assent/liga.jpg'

const Tilt = styled.h1`
 position:relative;
 bottom: 25vh;
 left: 54px;
 width: 30vw;
 height: 32px;
 text-align: left;
 font: normal normal normal 29px/33px Arial;
 color:white;
`
const Highlight = styled.section`
 position:relative;
 width:82vw;
 height:150vh;
 left:54px;
 bottom:25vh;
 h2{
  color:white;
 }
 sh{
  display:inline-block;
  width:15vw;
  margin-right:5vw;
 }
 h3{
  position:relative;
  width:19vw;
  height:7vh;
  bottom:3vh;
  color:white;
  font-size:16px;
 }
 p{
  position:absolute;
  display:inline-block;
  bottom:1vh;
  margin-left:11vw;
  color:white;
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
 teia{
  margin-left:8.5vw;
 }
 tx{
  margin-left:0.3vw;
 }
 doc{
  margin-left:2.5vw;
 }
 desc{
  position:absolute;
  width:18vw;
  top:30vh;
  color:white;
 }
 today{
  display:inline-block;
  width:15vw;
  margin-right:5vw;
 }
 spider{
  display:inline-block;
  width:15vw;
  margin-right:5vw;
 }
 dream{
  display:inline-block;
  width:15vw;
  margin-right:5vw;
 }
 time{
  position:relative;
  display:inline-block;
  width:15vw;
  top:25vh;
  margin-right:5vw;
 }
 avenger{
  position:relative;
  display:inline-block;
  width:15vw;
  top:25vh;
  margin-right:4vw;
 }
 venom{
  position:relative;
  display:inline-block;
  width:15vw;
  top:25vh;
  margin-right:7vw;
 }
 dc{
  position:relative;
  display:inline-block;
  width:15vw;
  top:25vh;
  margin-right:5vw;
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
const Fav = styled.img`
position:absolute;
width:1.5vw;
top:1vh;
left:18vw;
`
const Fav2 = styled.img`
position:absolute;
top:1vh;
margin-left:18vw;
`
const Fav3 = styled.img`
position:absolute;
top:1vh;
margin-left:18vw;
`
const Fav4 = styled.img`
position:absolute;
top:1vh;
margin-left:18vw;
`
const Fav5 = styled.img`
position:absolute;
top:1vh;
margin-left:18vw;
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
                <Tilt>Adicionados Recentemente</Tilt>
                <Highlight>
                 <sh>
                   <img src={sherek} alt=""/><Fav src={heart} alt=""/>
                   <h3>Sherek <p>4/5 <img src={like} alt=""/></p></h3>
                   <desc>Para resgatar uma princesa das garras de um dragão que cospe fogo, o ogro Shrek se une a um companheiro improvável: um burro brincalhão.</desc>
                 </sh>
                 <today>
                   <img src={today} alt=""/><Fav2 src={heart} alt=""/>
                   <h3>Hoje Eu Quero Voltar… <t>- <img src={like} alt=""/></t></h3>
                   <desc>Um novo colega de sala transforma a vida do estudante Leonardo, que também é cego, e complica sua amizade com sua melhor amiga.</desc>
                 </today>
                 <spider>
                   <img src={miranha} alt=""/><Fav3 src={heart} alt=""/>
                   <h3>Spider-man <teia>3/5 <img src={like} alt=""/></teia></h3>
                   <desc>Após ser picado por uma aranha radioativa, o garoto Miles Morales logo aprende a lançar teias com seus parceiros de um universo alternativo.</desc>
                 </spider>
                 <dream>
                   <img src={dream} alt=""/><Fav4 src={heart} alt=""/>
                   <h3>Um Sonho de Liberdade <tx>4,5/5 <img src={like} alt=""/></tx></h3>
                   <desc>Condenado pelo assassinato da esposa e do amante dela, um banqueiro se apega à esperança e à amizade com um detento chamado Red para sobreviver à prisão.</desc>
                 </dream>
                 <time>
                   <img src={time} alt=""/><Fav5 src={heart} alt=""/>
                   <h3>Que Horas Ela Volta? <doc>4/5 <img src={like} alt=""/></doc></h3>
                   <desc>Val é a fiel empregada domestica de uma família rica. Mas a chegada de sua filha gera tensão na casa e faz com que ela comece a questionar esse papel.</desc>
                 </time>
                 <avenger>
                   <Vingador src={marvel} alt=""/><Fav6 src={heart} alt=""/>
                   <h3>Avengers-Endgame<t>5/5 <img src={like} alt=""/></t></h3>
                   <desc>Após Thanos eliminar metade das criaturas vivas, os Vingadores têm de lidar com a perda de amigos e entes queridos. Com Tony Stark vagando perdido no espaço sem água e comida, Steve Rogers e Natasha Romanov lideram a resistência contra o titã louco.</desc>
                 </avenger>
                 <venom>
                   <Gosma src={anti} alt=""/><Fav7 src={heart} alt=""/>
                   <h3>Venom <tvm>5/5 <img src={like} alt=""/></tvm></h3>
                   <desc>O jornalista Eddie Brock desenvolve força e poder sobre-humanos quando seu corpo se funde com o alienígena Venom. Dominado pela raiva, Venom tenta controlar as novas e perigosas habilidades de Eddie.</desc>
                 </venom>
                 <dc>
                   <Syder src={hero} alt=""/><Fav8 src={heart} alt=""/>
                   <h3>Liga da Justiça <t>5/5 <img src={like} alt=""/></t></h3>
                   <desc>Impulsionado pela restauração de sua fé na humanidade e inspirado pelo ato altruísta do Superman, Bruce Wayne convoca sua nova aliada Diana Prince para o combate contra um inimigo ainda maior, recém-despertado.</desc>
                 </dc>
        </Highlight>
            </div>
        )
    }
}