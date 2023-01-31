import React from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';


function Header() {
  return (
    <>
        <Container>
        <div className='nav'>
        <h1>Pedaleo</h1>
        <ul className='menu'>
          <li className='quienes'>
            <a href='/' className='mainAnchors'>{`¿Quiénes somos? >`}</a>
            <ul className='quienes_hidden'>
              <li>
              <Link to={"/metodologia"}>Metodologia</Link>
              </li>
              <li>
              <Link to={"/nuestro-equipo"}>Nuestro equipo</Link>
              </li>
            </ul>
          </li>
        
          <li className='ofrecemos'>
            <a href='/' className='mainAnchors'>{`¿Qué ofrecemos? >`}</a>
            <ul className='ofrecemos_hidden'>
              <li>
                <Link to={"/servicios"}>Servicios</Link>
              </li>
              <li>
                <Link to={"/aula-matinal"}>{`Aula matinal (próximamente)`}</Link>
              </li>
              <li>
                <Link to={"/escuela-de-verano"}>{`Escuela de verano (próximamente)`}</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link className='mainAnchors' to={"/tarifas-y-precios"}>Tarifas y precios</Link>
          </li>
          <li>
            <Link className='mainAnchors' to={"/periodico"}>Periódico</Link>
          </li>
          <li>
            <Link className='mainAnchors' to={"/contacto"}>Contacto</Link>
          </li> 
       
        </ul>
        </div>
        </Container>
    </>
  )
}




const Container = styled.div`
  html, body{
  margin: 0;
  padding: 0;
  }
  background: rgb(107,229,255);
background: linear-gradient(180deg, rgba(107,229,255,1) 0%, rgba(150,247,255,0.48503151260504207) 52%, #fff5ce 100%);
height: 100px;
  .nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1{
      margin-left: 20px;
    }
  }
    ul{
    list-style: none;

      li, a{
        display: inline-block;
      }

    a{
      text-decoration: none;
      color: black;
      display: block;
      padding: 10px 1.5rem;
      margin: auto;
      transition: background-color .22s ease, color .22s ease;
      
    }
    
    p{
      cursor: pointer;
    }

    .menu li{
      position: relative;
    }
    .mainAnchors:hover{
      border-bottom: 1px solid #4ab5e7b1;
      color: #3496c0;
      transition: .2s;
    }

    .ofrecemos_hidden, .quienes_hidden{
      display: none;
      padding: 0;
      width: 230px;
      border-radius: 5px;
      border-left: 1px solid #4597b0;
      border-right: 1px solid #4597b0;
      border-bottom: 1px solid #4597b0;
    }

    .ofrecemos:hover > .ofrecemos_hidden{
      display: flex;
      flex-direction: column;
      background: rgb(223,255,254);
      background: linear-gradient(180deg, rgba(223,255,254,1) 0%, rgba(164,244,246,0.48503151260504207) 52%, rgba(86,211,255,0.46262254901960786) 100%);
      position: absolute;
      animation: slideup .5s ease;
      a{
        /* border-bottom: 2px solid #4597b0; */
        border-radius: 5px;
      }
      a:hover{
      background-color: #4ab5e77b;
      color: white;
    }
    }

    .quienes:hover > .quienes_hidden{
      display: flex;
      background: rgb(223,255,254);
      background: linear-gradient(180deg, rgba(223,255,254,1) 0%, rgba(164,244,246,0.48503151260504207) 52%, rgba(86,211,255,0.46262254901960786) 100%);
      position: absolute;
      flex-direction: column;
      animation: slideup .5s ease;
      a{
        
        border-radius: 5px;
      }
      a:hover{
      background-color: #4ab5e77b;
      color: white;
    }
    }

    @keyframes slideup{
      0%{
        opacity:0;
        transform: translateY(18px);
      }
      100%{
        opactiy:1;
        transform:none;
      }
    }

    }

`

export default Header