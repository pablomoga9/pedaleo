import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import stars from '../assets/stars.png'
function Precios() {
  return (
    <Container>
       <div className='imageContainer'>
        <div className='imageText'>
          <h1 data-aos="fade-right" data-aos-duration="1500">Tarifas y horarios</h1>
        </div>
        <div className='backHome'>

        </div>
      </div>
      <a className='horarioButton' href="#horarios">Ir a horarios</a>
      <div className='tableContainer'>
        <div className='discountContainer'>
          <p data-aos="fade-right" data-aos-duration="1500" className='discounts disc1'>
            ¡VEN Y PRUEBA! <br />
            1º DÍA GRATIS
          </p>
          <p data-aos="fade-left" data-aos-duration="1500" className='discounts disc2'>
            ¡10% DE DESCUENTO <br />
            AL TRAER A UN AMIGO!
          </p>
        </div>
        <table data-aos="fade-up" data-aos-duration="2000" cellSpacing={20}>
          <tr>
            <th><h2>Tarifas</h2></th>
            <th><h2>Precios</h2></th>
            <th><h2>Detalles</h2></th>
          </tr>
          <tr className='interactuable'>
            <td>Plan mensual intensivo</td>
            <td>Bachillerato: 50€/8h Semana <br />Primaria y ESO: 160€/32h</td>
            <td>Horarios adaptados a necesidades e intereses</td>
          </tr>
          <tr className='interactuable'>
            <td>Plan mensual</td>
            <td>Bachillerato: 28€/4h Semana <br />Primaria y ESO: 96€/16h</td>
            <td>Horarios adaptados a necesidades e intereses</td>
          </tr>
          <tr className='interactuable'>
            <td>Plan media jornada</td>
            <td>Bachillerato: 16€/2h Semana <br />Primaria y ESO: 52€/8h</td>
            <td>Horarios adaptados a necesidades e intereses</td>
          </tr>
          <tr className='interactuable'>
            <td>Plan online</td>
            <td>Bachillerato: 10€/h<br />Primaria y ESO: 8€/h</td>
            <td>Posibilidad de adaptar las tarifas de manera virtual</td>
          </tr>
          <tr className='interactuable'>
            <td>Días laborables</td>
            <td>Bachillerato: 12€/h<br />Primaria y ESO: 10€/h</td>
            <td>Se aplica con un mínimo de 2 horas al día</td>
          </tr>
          <tr className='interactuable'>
            <td>Días festivos y fines de semanas</td>
            <td>Bachillerato: 15€/h<br />Primaria y ESO: 12€/h</td>
            <td>Se aplica con un mínimo de 2 horas al día</td>
          </tr>
        </table>
        <div className='lastParagraph'>
          <p>TARIFAS ECONÓMICAS; <br />PRECIOS AJUSTADOS AL PLAN DE TRABAJO DE CADA ALUMNO; <br />GRAN VARIEDAD DE DESCUENTOS, ¡INFÓRMATE Y NOS ADAPTAREMOS A TI!</p>
          <Link to={'/contacto'}>Contacta</Link>
        </div>
      </div>
      <div id='horarios'>
          <div className='horarioTitle'>
            <h2>Horarios</h2>
            <img src={stars} alt="" />
          </div>
          <div className='horariosContent'>
            <h3>De Lunes a Viernes</h3>
            <h3>10:00h - 14:00h</h3>
            <p>Refuerzo para adultos</p>
            <h3>16:00h - 20:30h</h3>
            <p>Refuerzo primaria, E.S.O y bachillerato</p>
            <h3>Consultar fines de semana y festivos</h3>
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
    margin-bottom: 100px;
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



.tableContainer{
  width: 75%;
  margin: auto;
  margin-top: 100px;
}
  table{
    margin: auto;
    border-collapse:separate;
    border-spacing:1 20px;
    width: 100%;
    
  }
  th{
    padding: 20px;
    background: #ffff8bc4;
    border-radius: 10px;
    font-size: 20px;
  }
  td{
    width: 33%;
  }
  .interactuable{
    
    td{
      background: #84c4f1c9;
      padding: 20px;
      border-radius: 10px;
      font-size: 25px;
    }

  }
  .interactuable:hover{
   
  }

  .discountContainer{
    display: flex;
    justify-content: space-between;
  }

  .discounts{
    margin: 0;
    background: #ff0000b6;
    padding: 20px;
    border-radius: 10px;
    width: 30%;

  }

  .lastParagraph{
    width: 100%;
    background: #edc0ffc2;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 100px;
    p{
      font-size: 20px;
      font-weight: bold;
    }
    a{
        text-decoration: none;
        color: black;
        padding: 10px;
        background: #e3e30f;
        border-radius: 10px;
        width: 40%;
      }
      a:hover{
        background: #ffff3c;
        transition: .2s ease;
        color: #5e5713;
      }
  }
    .horarioButton{
      
        text-decoration: none;
        color: black;
        padding: 10px 50px 10px 50px;
        background: #e3e30f;
        border-radius: 10px;
        margin-right: 70%;
      }
      .horarioButton:hover{
        background: #ffff3c;
        transition: .2s ease;
        color: #5e5713;
      }
      #horarios{
        margin-top: 70px;
       
        width: 80%;
        margin: auto;
        .horarioTitle{
          display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 20px 20px 20px;
        width: 30%;
        margin: auto;
        border-style: dashed solid;
        border-bottom-style: none;
        border-color: #00a2ff;
        margin-bottom: 0;
        background: #60e2ff1e;
          h2{
          color: #3ab4ff;
          font-size: 35px;
          padding-left: 60px;
          padding-bottom: 0px;
          border-bottom: 4px solid white;
        }
        img{
          max-width: 70px;
          max-height: 50px;
          margin-top: 25px;
        }
        }

        .horariosContent{
          display: flex;
          flex-direction: column;
          background: #60e2ff5c;
          border: 3px solid #00a2ff;
          padding: 30px;
          border-radius: 20px;
          margin-top: 0;
          margin-bottom: 50px;
          h3{
            font-size: 25px;
          }
          p{
            font-size: 20px;
          }
        }
       
      }
 
`

export default Precios