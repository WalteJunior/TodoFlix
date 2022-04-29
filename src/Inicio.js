import React from 'react';
import styled from 'styled-components';
import family from './assent/familia.png';
import heart from './assent/Coração.svg';
import like from './assent/Like.svg';
import sherek from './assent/Sherek.png';
import today from './assent/hoje.png';
import miranha from './assent/Miranha.png';
import dream from './assent/Sonho.png';
import time from './assent/horas.png';
import next from './assent/next.svg';

const Show = styled.div`
position:relative;
width:70vw;
height:45vh;
bottom:23vh;
left:4vw;

h2{
  position:relative;
  width:29vw;
  left:35.5vw;
  bottom:40vh;
  color:white;
  font-size:40px;
}
h3{
  position:relative;
  width:15vw;
  left:35.5vw;
  bottom:35vh;
  color:white;
}
p{
  position:relative;
  width:33vw;
  left:35.5vw;
  bottom:43vh;
  color:white;
}
`
const Cora = styled.img`
position:relative;
left:3vw;
bottom:33vh;
cursor:pointer;
`
const Highlight = styled.section`
position:relative;
width:98vw;
height:60vh;
bottom:10vh;
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
  margin-left:2vw;
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
  top:37vh;
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
  display:inline-block;
  width:15vw;
}
`
const Fav = styled.img`
position:absolute;
top:8vh;
left:18vw;
`
const Fav2 = styled.img`
position:absolute;
top:8vh;
margin-left:18vw;
`
const Fav3 = styled.img`
position:absolute;
top:8vh;
margin-left:18vw;
`
const Fav4 = styled.img`
position:absolute;
top:8vh;
margin-left:18vw;
`
const Fav5 = styled.img`
position:absolute;
top:8vh;
margin-left:18vw;
`
const Carrosel = styled.img`
position:absolute;
top:15vh;
left:95vw;
`

export default class test extends React.Component{
  render(){
      return(
          <div>
        <Show>
        <img src={family} alt=""/>
        <Cora src={heart} alt=""/>
        <h3>Visto Recentemente</h3>
        <h2>Capitao Fantástico</h2>
        <p>Nas florestas do estado de Washington, um pai cria seus seis filhos longe da civilização, em uma rígida rotina de aventuras. Ele é forçado a deixar o isolamento e leva sua família para encarar o mundo, desafiando sua ideia do que significa ser pai.</p>
        <p>4/5 <img src={like} alt=""/></p>
        </Show>
        <Highlight>
            <h2>Destaques</h2>
        <Carrosel src={next} alt=""/>
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
        </Highlight>
        </div>
      )
  }
}