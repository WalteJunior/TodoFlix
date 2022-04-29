import React from 'react';
import styled from 'styled-components';
import {Routes, Route,} from 'react-router-dom';
import Todos from './Pag/Todos.js';
import Home from './Inicio.js';
import Add from './Pag/Adicionados.js';
import Fav from './Pag/Favoritos.js';
import View from './Pag/Vistos.js';

export default class test extends React.Component{
    render(){
        return(
            <div>
                <Routes>
                    <Route path='/inicio' element={<Home/>}/>
                    <Route path='/todos' element={<Todos/>}/>
                    <Route path='/fav' element={<Fav/>}/>
                    <Route path='/ver' element={<View/>}/>
                    <Route path='/adic' element={<Add/>}/>
                    </Routes>
            </div>
        )
    }
}