import React from 'react'
import styled from 'styled-components';
import AOS from 'aos';
import { Link } from 'react-router-dom'
import 'aos/dist/aos.css';
AOS.init();

function Metodología() {
  return (
   <Container>
    <div className='imageContainer'>
        <div className='imageText'>
          <h1 data-aos="fade-right" data-aos-duration="1500">Metodología</h1>
          <p data-aos="fade-left" data-aos-duration="1500">Pedaleo es un centro socioeducativo de reciente formación que busca modernizar la educación y la enseñanza, para así adaptarlas a disposición de cada alumno. Entendemos que el proceso de aprendizaje puede variar en cada situación personal y queremos conseguir que en cada una de estas, nuestros clientes disfruten de dicho proceso.</p>
        </div>

        <Link className='quienesButton' to={'/quienes-somos'} >Conoce más</Link>


        <div className='backHome'>

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
   
    .quienesButton{
      position: absolute;
      z-index: 1;
      top: 75%;
      text-decoration: none;
      color: black;
      padding: 10px;
      background: #e3e30f;
      border-radius: 10px;
      left: 40%;
      width: 20%;
      -webkit-transition: border .5s ease;
    }
    .quienesButton:hover{
      border: 4px solid #ffff71;
      transition: .2s ease;
      color: #5e5713;
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

`
export default Metodología