import React from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import { Link } from 'react-router-dom';
import equipo1 from '../assets/equipo1.jpeg';
import equipo2 from '../assets/equipo2.jpg';
import equipo3 from '../assets/equipo3.jpg';
import tutor from '../assets/studentTutor.png';
import 'aos/dist/aos.css';

function Quienes() {
  return (
   <Container>
     <div className='imageContainer'>
        <div className='imageText'>
          <h1 data-aos="fade-right" data-aos-duration="1500">¿Quiénes somos?</h1>
        </div>
        <div className='backHome'>

        </div>
      </div>
      <div className='quienesContainer'>
        <div className='description'>
          <p>
          Somos un centro socioeducativo de reciente formación que busca modernizar la educación y la enseñanza, para así adaptarlas a disposición de cada alumno. Entendemos que el proceso de aprendizaje puede variar en cada situación personal y queremos conseguir que en cada una de estas, nuestros clientes disfruten de dicho proceso.
          </p>
        </div>
        <div className='links'>
          <div className='link'>
            <h2>¿Quieres conocer a nuestro equipo?</h2>
            <div className='gallery'>
              <img src={equipo1} alt="" />
              <img src={equipo2} alt="" />
              <img src={equipo3} alt="" />
            </div>
            <Link to={'/nuestro-equipo'}>Equipo</Link>
          </div>
          <div className='link'>
<h2>Infórmate sobre nuestra metodología</h2>
<div className='gallery'>
    <img src={tutor} alt="" />
    <img src='https://www.pngplay.com/wp-content/uploads/6/Books-Vector-Transparent-File.png' alt="" />
    <img src="https://cdn-icons-png.flaticon.com/512/1056/1056394.png" alt="" />
</div>
<Link to={'/metodologia'}>Metodología</Link>
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
      .gallery{
    display: flex;
    width: 300px;
    height: 150px;
    margin: auto;
    img{
      width: 100px;
      flex-grow: 1;
      object-fit: cover;
      opacity: .8;
      transition: .5s ease;
      border: 4px solid #0000009b;
      border-radius: 20px;
    }
    img:hover{
      width: 150px;
      opacity: 1;
      filter: contrast(120%);
    }
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

export default Quienes