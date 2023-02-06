import React from 'react'
import styled from 'styled-components';
import AOS from 'aos';
import { Link } from 'react-router-dom'
import 'aos/dist/aos.css';
import tutor from '../assets/studentTutor.png';
AOS.init();

function Metodología() {
  return (
   <Container>
    <div className='imageContainer'>
        <div className='imageText'>
          <h1 data-aos="fade-right" data-aos-duration="1500">Metodología</h1>
          {/* <p data-aos="fade-left" data-aos-duration="1500">Pedaleo es un centro socioeducativo de reciente formación que busca modernizar la educación y la enseñanza, para así adaptarlas a disposición de cada alumno. Entendemos que el proceso de aprendizaje puede variar en cada situación personal y queremos conseguir que en cada una de estas, nuestros clientes disfruten de dicho proceso.</p> */}
        </div>

        {/* <Link className='quienesButton' to={'/quienes-somos'} >Conoce más</Link> */}


        <div className='backHome'>

        </div>
      </div>
      <div className='paragraphs'>
        <div className='textOne'>
          <img src={tutor} alt="" />
          <p>Apostamos por un sistema de enseñanza en el cual prioriza el aprendizaje individualizado, nuestras aulas cuentan con un máximo de 6 alumnos, con ello conseguimos que el asentamiento de los conocimientos sea mucho más fructífero.</p>
        </div>
        <div className='textOne'>
          <img src="https://www.pngplay.com/wp-content/uploads/6/Books-Vector-Transparent-File.png" alt="" />
          <p>Optamos por una metodología constructivista en la cual tenemos en cuenta los conocimientos previos y la interacción social como caminos de crecimiento en el desarrollo cognitivo, de este modo, la inclusión de nuevos conocimientos será más sencilla y cómoda de adaptar.</p>
        </div>
        <div className='textOne'>
          <img src="https://cdn-icons-png.flaticon.com/512/1056/1056394.png" alt="" />
          <p>A su vez, uno de nuestros grandes objetivos es que el alumnado se interese realmente por lo que está aprendiendo y se pueda crear en ellos una rutina de trabajo e interés propio.</p>
        </div>
        <div className='textOne noBackground'>
          <h2>Contacta con nosotros</h2>
          <Link to={'/contacto'}>Pide información</Link>
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
    background-image: url('https://pacificteentreatment.com/wp-content/uploads/2018/08/sri.jpg');
    height: 105%;
    background-size: cover;
    object-fit: cover;
    width: 105%;
    background-position:center;
    background-attachment: fixed;
    margin: -5px;
    filter: blur(4px);
  }
  

  .paragraphs{
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
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
    
    
    .textOne{
      position: relative;
      display: flex;
      flex-direction: column;
      width: 33%;
      margin-left: 10%;
      background: #8feaffd1;
      padding: 20px;
      margin-top: 5%;
      margin-bottom: 5%;
      border-radius: 20px;
      -webkit-box-shadow: 4px 7px 31px 4px rgba(107,156,179,1);
-moz-box-shadow: 4px 7px 31px 4px rgba(107,156,179,1);
box-shadow: 4px 7px 31px 4px rgba(107,156,179,1);
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
      img{
        max-width: 50%;
        background: #7f7fd1;
        border-radius: 160px;
      }
      p{
        position: absolute;
        top: 70%;
        text-align: start;
       background: #fff8b1f2;
        padding: 20px;
        border-radius: 20px;
        width: 100%;
        font-size: 20px;
        -webkit-box-shadow: 10px 3px 54px -6px rgba(201,190,74,0.76);
-moz-box-shadow: 10px 3px 54px -6px rgba(201,190,74,0.76);
box-shadow: 10px 3px 54px -6px rgba(201,190,74,0.76);
        
      }
    }
  }

`
export default Metodología