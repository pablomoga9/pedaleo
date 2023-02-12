import React from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/pedaleoLogo.png'

function Header() {
  return (
    <>
        <Container>
        <div className='nav'>
        <Link to={'/'}><img className='logo' src={logo} alt="" /></Link>
        <ul className='menu'>
          <li className='quienes'>
            <Link to={'/quienes-somos'} className='mainAnchors'>{`¿Quiénes somos? ˅`}</Link>
            <ul className='quienes_hidden'>
              <li>
              <Link to={"/nuestro-equipo"}>Nuestro equipo</Link>
              </li>
              <li>
              <Link to={"/metodologia"}>Metodología</Link>
              </li>
            </ul>
          </li>
        
          <li className='ofrecemos'>
            <Link to={'que-ofrecemos'} className='mainAnchors'>{`¿Qué ofrecemos? ˅`}</Link>
            <ul className='ofrecemos_hidden'>
              <li>
                <Link to={"/servicios"}>Servicios</Link>
              </li>
              <li>
                <Link className='disableLink' to={"/aula-matinal"}>{`Aula matinal (próximamente)`}</Link>
              </li>
              <li>
                <Link  className='disableLink' to={"/escuela-de-verano"}>{`Escuela de verano (próximamente)`}</Link>
              </li>
            </ul>
          </li>
          <li className='tarifas'>
            <Link className='mainAnchors' to={"/tarifas-y-horarios"}>Tarifas y horarios</Link>
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
  position: sticky;
  top: 0;
  z-index: 2;
  
  html, body{
  margin: 0;
  padding: 0;
  }
  background: rgb(107,229,255);
background: linear-gradient(180deg, rgba(107,229,255,1) 0%, rgba(150,247,255,0.48503151260504207) 52%, #fff5ce 100%);
height: 140px;

  .logo{
    max-width: 200px;
    max-height: 200px;
    margin-left: 30px;
    padding-top: 30px;
  }


  .disableLink{
    pointer-events: none;
  }

  .nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1{
      margin-left: 20px;
      font-size: 50px;
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
    .mainAnchors{
      font-weight:bold;
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
      border-radius: 0px 0px 5px 5px;
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
        border-radius: 0px;
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
        
        border-radius: 0px;
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