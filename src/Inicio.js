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
sh{
  display:inline-block;
  width:14vw;
  margin-right:5.8vw;
}
today{
  display:inline-block;
  width:14vw;
  margin-right:5.8vw;
}
spider{
  display:inline-block;
  width:14vw;
  margin-right:5.8vw;
}
dream{
  display:inline-block;
  width:14vw;
  margin-right:5.8vw;
}
time{
  display:inline-block;
  width:14vw;
}
`
const Search = styled.input`
  position:relative;
  width:30vw;
  height:4vh;
  margin-left:55.6vw;
  bottom:83vh;
  background-image: url("../../projeto/src/assent/lupa.svg");
  background-color:#2C2C2C;
  border-radius:4px;
  border:2px solid #2C2C2C;
`
const Subcont = styled.div`
display:flex;
flex-wrap:wrap;
width:95vw;
`
const Cont = styled.div` 
position:relative;
width:15vw;
margin-right:4vw;
h2{
  width:18vw;
  font-size:17px;
  color:white;
 }
 img{
    width:18vw;
   heigth:10vh;
  }
 p{
  position:relative;
  width:15vw;
  top:vh;
  margin-left:1vw;
  color:white;
  }
 av{
  width:10vw;
  border:solid white;
  height:3vh;
 }
`
const Vl = styled.h4`
width:5vw;
color:white;
img{
  width:1.5vw;
}
`
const Carrosel = styled.img`
position:absolute;
top:18vh;
left:93vw;
`
export default class test extends React.Component{
  state ={
    filme:[{
      titulo:'Sherek',
      poster: sherek,
      descrisao:'Para resgatar uma princesa das garras de um dragão que cospe fogo, o ogro Shrek se une a um companheiro improvável: um burro brincalhão.',
      nota: 4,
      fedd: like
    },
    {
      titulo:'Hoje eu quero voltar sozinho',
      poster: today,
      descrisao:'Um novo colega de sala transforma a vida do estudante Leonardo, que também é cego, e complica sua amizade com sua melhor amiga.',
      nota: 0,
      fedd: like
    },
    {
      titulo:'Spider-man',
      poster: miranha,
      descrisao:'Após ser picado por uma aranha radioativa, o garoto Miles Morales logo aprende a lançar teias com seus parceiros de um universo alternativo.',
      nota: 3,
      fedd: like
    },
    {
      titulo:'Um Sonho de Liberdade',
      poster: dream,
      descrisao:'Condenado pelo assassinato da esposa e do amante dela, um banqueiro se apega à esperança e à amizade com um detento chamado Red para sobreviver à prisão',
      nota: 4,
      fedd: like
    },
    {
      titulo:'Que Horas Ela Volta?',
      poster: time,
      descrisao:'Val é a fiel empregada domestica de uma família rica. Mas a chegada de sua filha gera tensão na casa e faz com que ela comece a questionar esse papel.',
      nota: 4,
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
          <Search type="text" placeholder="Pesquisar" onChange={this.random}/>
                <Subcont>
                  <Carrosel src={next} alt=""/>
                 {this.state.filter.map((item)=>(
                  <Cont>
                    <img src={item.poster} alt=""/>
                    <h2>{item.titulo}</h2>
                    <p>{item.descrisao}</p>
                    <Vl>{item.nota}/5 <img src={item.fedd} alt=""/></Vl>
                  </Cont>
                 ))}
                </Subcont>
         </Highlight>
        </div>
      )
  }
}