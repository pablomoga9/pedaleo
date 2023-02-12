import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

function Servicios() {
  return (
    <Container>
      <div className='imageContainer'>
        <div className='imageText'>
          <h1 data-aos="fade-right" data-aos-duration="1500">Servicios</h1>
        </div>
        <div className='backHome'>
      
        </div>
      </div>
      <div className='equipoContainer'>
        <div className='equipoContainer'>
          <div className='members'>
            <h2>A nivel académico:</h2>
            <div className='member'>
              <img src="https://img.icons8.com/ios-filled/50/null/school.png" alt="" />
              <h3>Clases de refuerzo para primaria</h3>
            </div>
            <div className='member'>
              <img src="https://img.icons8.com/glyph-neue/64/null/books.png" alt="" />
              <h3>Clases de refuerzo para ESO</h3>
            </div>
            <div className='member'>
              <img src="https://img.icons8.com/ios-filled/100/null/graduation-cap.png" alt="" />
              <h3>Clases de refuerzo para Bachillerato</h3>
            </div>

          </div>
        </div>
        <div className='equipoContainer'>


          <div className='members'>
            <h2>A nivel socioeducativo:</h2>
            <div className='member'>
              <img src="https://img.icons8.com/glyph-neue/64/null/parent-guardian.png" alt="" />
              <h3>Sesiones de orientación educativa</h3>
            </div>
            <div className='member'>
              <img src="https://img.icons8.com/windows/96/null/defend-family--v3.png" alt="" />
              <h3>Programas de intervención familiar</h3>
            </div>
          </div>
        </div>
      </div>
      <div className='description'>
          <p>
          Iremos incluyendo más tipos de servicios en forma de talleres ocasionales (educación emocional, educación sexual, uso responsable de las TIC, uso y adquisición de habilidades sociales…)
          </p>
          <div className='contactUs'>
            <h3>Para más información, contacta con nosotros:</h3>
            <Link to={'/contacto'}>Contacto</Link>
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
    background-image: url('https://img-cdn.inc.com/image/upload/w_1920,h_1080,c_fill/images/panoramic/GettyImages-577674005_492115_zfpgiw.jpg');
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
      img{
        max-width: 70px;
        max-height: 70px;
      }
     
     
    }
  }
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
        margin-bottom: 40px;
    }

    .contactUs{
      display: flex;
      flex-direction: row;
      justify-content: center;
      width: 70%;
      margin: auto;
      a{
        
        text-decoration: none;
        color: black;
        padding: 10px;
        background: #e3e30f;
        border-radius: 10px;
        
        margin: auto;
        width: 30%;
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

export default Servicios