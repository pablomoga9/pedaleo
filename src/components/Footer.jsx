import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/PandaGabri.png'

function Footer() {
  return (
    <Container>
      <div className='router'>
        <Link to={'/'}>Inicio</Link>
        <Link to={'/quienes-somos'}>Quiénes somos</Link>
        <Link to={'/que-ofrecemos'}>Qué ofrecemos</Link>
        <Link to={'/tarifas-y-precios'}>Tarifas y precios</Link>
        <Link to={'/periodico'}>Periódico</Link>
        <Link to={'/contacto'}>Contacto</Link>
      </div>
      <div className='contact'>
        <h2>Contacto</h2>
        <b>pedaleoeducacion@gmail.com</b>
        <b> +34 611597294</b>
        <div className='socialIcons'>
              <a href="https://www.instagram.com/pedaleoeducacion/?hl=es" target='_blank'><img className='icon' src="https://img.icons8.com/plasticine/100/null/instagram-new--v2.png"/></a>
              <a href="https://open.spotify.com/show/4sPkmCS9KSeJvsQwPDwgVn?si=18d100af46be4397" target='_blank'><img className='icon' src="https://img.icons8.com/plasticine/100/null/spotify--v2.png"/></a>
        </div>
      </div>
      <div className='logo'>
        <img src={logo} alt="" />
      </div>
    </Container>
  )
}


const Container = styled.div`
  padding: 30px;
  background: #3835e676;
  border-top: solid 5px #3734ffa4;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-style: dashed;
  border-bottom: none;
  border-left: none;
  border-right: none;
  .router{
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 30%;
    gap: 10px;
    a{
      text-decoration: none;
      color: black;
      padding: 10px;
      background: #ffed85b7;
      border-radius: 10px;
    }
    a:hover{
      border: 4px solid #b1b153;
      transition: .2s ease;
      color: white;
    }
  }

  .contact{
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    margin: 0;
    gap: 20px;
    width: 30%;
  }
  .socialIcons{
    display: flex;
    flex-direction: row;
    gap: 20px;
    .icon{
    max-width: 60px;
  }
  .icon:hover{
    filter: brightness(1.5);
  }}
  .logo{
    width: 30%;
    img{
      max-width: 400px;
    }
  }
`

export default Footer