import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
function Precios() {
  return (
    <Container>
      <div className='tableContainer'>
        <div className='discountContainer'>
          <p className='discounts disc1'>
            ¡VEN Y PRUEBA! <br />
            1º DÍA GRATIS
          </p>
          <p className='discounts disc2'>
            ¡10% DE DESCUETO <br />
            AL TRAER A UN AMIGO!
          </p>
        </div>
        <table cellSpacing={20}>
          <tr>
            <th><h2>Tarifas</h2></th>
            <th><h2>Precios</h2></th>
            <th><h2>Detalles</h2></th>
          </tr>
          <tr className='interactuable'>
            <td>Plan mensual intensivo {`(200€/32h)`}</td>
            <td>50€/8h Semana</td>
            <td>Horarios adaptados a necesidades e intereses</td>
          </tr>
          <tr className='interactuable'>
            <td>Plan mensual {'(112€/16h)'}</td>
            <td>28€/4h Semana</td>
            <td>Horarios adaptados a necesidades e intereses</td>
          </tr>
          <tr className='interactuable'>
            <td>Plan media jornada {'(64€/8h)'}</td>
            <td>16€/2h Semana</td>
            <td>Horarios adaptados a necesidades e intereses</td>
          </tr>
          <tr className='interactuable'>
            <td>Plan online</td>
            <td>10€/h</td>
            <td>Posibilidad de adaptar las tarifas de manera virtual</td>
          </tr>
          <tr className='interactuable'>
            <td>Días laborables</td>
            <td>12€/h</td>
            <td>Se aplica con un mínimo de 2 horas al día</td>
          </tr>
          <tr className='interactuable'>
            <td>Días festivos y fines de semanas</td>
            <td>15€/h</td>
            <td>Se aplica con un mínimo de 2 horas al día</td>
          </tr>
        </table>
        <div className='lastParagraph'>
          <p>TARIFAS ECONÓMICAS; <br />PRECIOS AJUSTADOS AL PLAN DE TRABAJO DE CADA ALUMNO; <br />GRAN VARIEDAD DE DESCUENTOS, ¡INFÓRMATE Y NOS ADAPTARMEOS A TI!</p>
          <Link to={'/contacto'}>Contacta</Link>
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
.tableContainer{
  width: 75%;
  margin: auto;
  
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
 
`

export default Precios