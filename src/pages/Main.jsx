import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './Home'
import Contacto from './Contacto';
import Equipo from './Equipo';
import Metodologia from './Metodología';
import Periodico from './Periodico'
import Matinal from './Matinal';
import Precios from './Precios';
import Servicios from './Servicios';
import Summer from './Summer';
import styled from 'styled-components';

function Main() {
  return (
   <Container>
     <main>
      <Routes>
        <Route element={<Home/>} path={"/"}/>
        <Route element={<Contacto/>} path={"/contacto"}/>
        <Route element={<Equipo/>} path={"/nuestro-equipo"}/>
        <Route element={<Metodologia/>} path={"/metodologia"}/>
        <Route element={<Periodico/>} path={"/periodico"}/>
        <Route element={<Summer/>} path={"/escuela-de-verano"}/>
        <Route element={<Servicios/>} path={"/servicios"}/>
        <Route element={<Precios/>} path={"/tarifas-y-precios"}/>
        <Route element={<Matinal/>} path={"/aula-matinal"}/>
      </Routes>
    </main>
   </Container>
  )
}

const Container = styled.div`
  
 
    background: rgb(255,245,206);
background: linear-gradient(180deg, rgba(255,245,206,1) 0%, rgba(244,228,255,0.48503151260504207) 52%, #3835e676 100%);
  height: 3000px;
`

export default Main