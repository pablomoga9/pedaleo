import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import equipo1 from '../assets/equipo1.jpeg';
import equipo2 from '../assets/equipo2.jpg';
import equipo3 from '../assets/equipo3.jpg';

function Equipo() {
  return (

    <Container>
      <div className='imageContainer'>
        <div className='imageText'>
          <h1 data-aos="fade-right" data-aos-duration="1500">Nuestro equipo</h1>
        </div>
        <div className='backHome'>

        </div>
      </div>
      <div className='equipoContainer'>
        <div className='members'>
        <div className='member'>
          <img className='teamImage' src={equipo3} alt="" />
          <h2><b>Gabriel Fernández Cabello</b></h2>
          <div className='us'>
            <img src="https://www.us.es/sites/default/files/2019-05/marca-US-principal.jpg" alt="" />
          <h3>Licenciado en Pedagogía en la Universidad de Sevilla</h3>
          </div>
          <p>Posee
            el título de Monitor de Ocio y Tiempo Libre por la Universidad de Nebrija. Ofrece
            conocimiento en áreas tanto de primaria como secundaria, mostrando compromiso y
            esfuerzo mediante clases dinámicas. Además, ofrece refuerzo orientativo tanto académico
            como personal.</p>
        </div>
        <div className='member'>
          <img className='teamImage' src={equipo2} alt="" />
          <h2><b>Rocío Quintana Romero</b></h2>
          <div className='us'>
            <img src="https://www.us.es/sites/default/files/2019-05/marca-US-principal.jpg" alt="" />
          <h3>Licenciado en Pedagogía en la Universidad de Sevilla</h3>
          </div>
          <p>Posee el
            título de Monitor de Ocio y Tiempo Libre por la Universidad de Nebrija. Especializada en el
            refuerzo educativo en áreas de primaria y secundaria y con capacidad de orientación
            personal y educativa.</p>
        </div>
        <div className='member'>
          <img className='teamImage' src={equipo1} alt="" />
          <h2><b>Luis Martínez Pérez</b></h2>
          <div className='us'>
            <img src="https://www.us.es/sites/default/files/2019-05/marca-US-principal.jpg" alt="" />
          <h3>Licenciado en Pedagogía en la Universidad de Sevilla</h3>
          </div>
          <p>Posee el FP
            Superior de Educación infantil y el título de Monitor de Tiempo Libre y Animación
            Sociocultural. Ofrece conocimientos en las áreas de primaria y secundaria con capacidades
            de orientación personal y educativa mediante diversas metodologías de aprendizaje.</p>
        </div>
        </div>
        <div className='podcast'>

        </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
  .imageContainer{
    top: 0px;
    position: relative;
    height: 40vh;
    width: 1850px;
    overflow: hidden;
    margin: auto;
    border-radius: 20px;
    .imageText{
      /* display: flex;
      flex-direction: column; */
      position: absolute;
      z-index: 1;
      left: 10%;
      top: 25%;
      padding: 30px;
      width: 50%;
      margin: auto;
     
      p{
        text-align: start;
        background: #fff8b1a1;
        padding: 20px;
        font-size: 20px;
        border-radius: 20px;
        -webkit-box-shadow: 10px 3px 54px -6px rgba(201,190,74,0.76);
-moz-box-shadow: 10px 3px 54px -6px rgba(201,190,74,0.76);
box-shadow: 10px 3px 54px -6px rgba(201,190,74,0.76);
      }
      h1{
       text-align: start;
       background: #fff8b1a8;
        padding: 20px;
        border-radius: 20px;
        width: 40%;
        font-size: 40px;
        -webkit-box-shadow: 10px 3px 54px -6px rgba(201,190,74,0.76);
-moz-box-shadow: 10px 3px 54px -6px rgba(201,190,74,0.76);
box-shadow: 10px 3px 54px -6px rgba(201,190,74,0.76);
      }
    }
   
    
  }
  .backHome{
    opacity: 90%;
    background-image: url('https://imageio.forbes.com/specials-images/imageserve/605496ee5a1dc9d129331252/Business-people-discussing-over-new-business-project-in-office/960x0.jpg?format=jpg&width=960');
    height: 105%;
    background-size: cover;
    object-fit: cover;
    width: 105%;
    background-position:center;
    background-attachment: fixed;
    margin: -5px;
    filter: blur(4px);
  }

  .equipoContainer{
    width: 90%;
    margin: auto;
    margin-top: 5%;
    background: #60e2ff5c;
    border: 3px solid #00a2ff;
    padding: 30px;
    border-radius: 20px;
    -webkit-box-shadow: 4px 24px 31px -1px rgba(104,81,135,1);
    -moz-box-shadow: 4px 24px 31px -1px rgba(104,81,135,1);
    box-shadow: 4px 24px 31px -1px rgba(104,81,135,1);
    .members{
    display: flex;
    flex-direction: row;
    margin-bottom: 50px;
    gap:30px;
    .member{
      width: 33%;
      background: #8feaffd1;
      padding: 20px;
      border-radius: 20px;
      -webkit-box-shadow: 4px 7px 31px 4px rgba(107,156,179,1);
-moz-box-shadow: 4px 7px 31px 4px rgba(107,156,179,1);
box-shadow: 4px 7px 31px 4px rgba(107,156,179,1);
      .teamImage{
        max-width: 100%;
        max-height: 40%;
        border-radius: 20px;
        border: 3px solid #347785a9;
      }
      .us{
        display: flex;
        flex-direction: row;
        gap: 20px;
        justify-content: center;
        img{
          border-radius: 120px;
          max-width: 50px;
          max-height: 50px;
        }
      }
      h2{
        color: #8b8b68;
      }
      p{
        background: #fff8b1f2;
        padding: 20px;
        border-radius: 20px;
        font-size: 20px;
        -webkit-box-shadow: 10px 3px 54px -6px rgba(201,190,74,0.76);
-moz-box-shadow: 10px 3px 54px -6px rgba(201,190,74,0.76);
box-shadow: 10px 3px 54px -6px rgba(201,190,74,0.76);
      }
    }
  }
  }
`

export default Equipo