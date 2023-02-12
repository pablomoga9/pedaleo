import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Que() {
  return (
    <Container>
      <div className='imageContainer'>
        <div className='imageText'>
          <h1 data-aos="fade-right" data-aos-duration="1500">¿Qué ofrecemos?</h1>
        </div>
        <div className='backHome'>

        </div>
      </div>
      <div className='queContainer'>
        <div className='description'>
          <p>
            En Pedaleo educación ponemos a disposición de las personas interesadas tanto servicios de refuerzo educativo para niveles de primaria, ESO Y bachillerato, como también, sesiones de orientación socioeducativa a nuestros clientes.
            <br /><br /><br />
            Además, próximamente ofreceremos servicios de aula matinal y una escuela de verano.
          </p>
        </div>
        <div className='links'>
          <div className='link'>
            <h2>Conoce nuestros servicios disponibles</h2>

            <Link to={'/servicios'}>Servicios</Link>
          </div>
          <div className='link'>
            <h2>Aula matinal (próximamente disponible)</h2>

            <Link className='disableLink' to={'/metodologia'}>Aula Matinal</Link>
          </div>
          <div className='link'>
            <h2>Escuela de verano (próximamente disponible)</h2>

            <Link className='disableLink' to={'/nuestro-equipo'}>Escuela de Verano</Link>
          </div>
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
    background-image: url('https://grownandflown.com/wp-content/uploads/2020/03/high-school-teacher-.jpg');
    height: 105%;
    background-size: cover;
    object-fit: cover;
    width: 105%;
    background-position:center;
    background-attachment: fixed;
    margin: -5px;
    filter: blur(4px);
  }

  .description{
    margin-bottom: 50px;
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
    p{
        width: 90%;
        background: #fff8b1f2;
        padding: 20px;
        margin: auto;
        border-radius: 20px;
        font-size: 20px;
        -webkit-box-shadow: 10px 3px 54px -6px rgba(201,190,74,0.76);
        -moz-box-shadow: 10px 3px 54px -6px rgba(201,190,74,0.76);
        box-shadow: 10px 3px 54px -6px rgba(201,190,74,0.76);
    }
  }
  .links{
    display: flex;
    flex-direction: row;
    margin-bottom: 50px;
    width: 90%;
    margin: auto;
    margin-top: 5%;
    gap: 30px;
    background: #60e2ff5c;
    border: 3px solid #00a2ff;
    padding: 30px;
    border-radius: 20px;
    -webkit-box-shadow: 4px 24px 31px -1px rgba(104,81,135,1);
    -moz-box-shadow: 4px 24px 31px -1px rgba(104,81,135,1);
    box-shadow: 4px 24px 31px -1px rgba(104,81,135,1);
    .link{
      background: #8feaffd1;
      padding: 20px;
      width: 50%;
      border-radius: 20px;
      -webkit-box-shadow: 4px 7px 31px 4px rgba(107,156,179,1);
-moz-box-shadow: 4px 7px 31px 4px rgba(107,156,179,1);
box-shadow: 4px 7px 31px 4px rgba(107,156,179,1);
      display: flex;
      flex-direction: column;
      gap: 30px;
      align-items: center;
      justify-content: center;
      .disableLink{
    pointer-events: none;
    background:#7b7b2890 ;
  }
    
  a{
     
     text-decoration: none;
     color: black;
     padding: 10px;
     background: #e3e30f;
     border-radius: 10px;
     /* top: 50%;
     left: 25%; */
     margin: auto;
     width: 70%;
     -webkit-transition: border .5s ease;
     }
     a:hover{
       border: 4px solid #ffff71;
       transition: .2s ease;
       color: #5e5713;
     }
    }
  }

 

`

export default Que