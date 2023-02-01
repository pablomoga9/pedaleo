import React from 'react'
import styled from 'styled-components';
import AOS from 'aos';
import { Link } from 'react-router-dom'
import 'aos/dist/aos.css';
import fachada from '../assets/fachadaPedaleo.PNG';
import insta from '../assets/instaPedaleo.PNG';
import aula from '../assets/pedaleoAula.PNG';
import poscaleo from '../assets/poscaleo.PNG';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
AOS.init();

function Home() {
  const pandaIcon = new L.Icon({
    iconUrl: require('../assets/pandaIcon.png'),
    iconAnchor: null,
    popupAnchor: [0,-5],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(50, 50),
    className: 'leaflet-div-icon'
  });



  return (
    <Container>
      <div className='imageContainer'>
        <div className='imageText'>
          <h1 data-aos="fade-right" data-aos-duration="1500">Frase con gancho</h1>
          <p data-aos="fade-left" data-aos-duration="1500">Pedaleo un centro socioeducativo de reciente formación que busca modernizar la educación y la enseñanza, para así adaptarlas a disposición de cada alumno. Entendemos que el proceso de aprendizaje puede variar en cada situación personal y queremos conseguir que en cada una de estas, nuestros clientes disfruten de dicho proceso.</p>
        </div>

        <Link className='quienesButton' to={'/quienes-somos'} >Conoce más</Link>


        <div className='backHome'>

        </div>
      </div>
      <div className='whereToFind'>
        <h1>Dónde encontrarnos</h1>
        <div className='whereContainer'>
          <MapContainer style={{ width: '60%', height: '500px' }} center={[37.37181697142589, -5.958355046060471]} zoom={15} scrollWheelZoom={false}>
            <TileLayer
             attribution="© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>"
             url="https://api.mapbox.com/styles/v1/mogar99/cl8w4411n000j15prntrktrgw/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibW9nYXI5OSIsImEiOiJja2Z3ZDJoaGQxOXFqMzN0OHBhajdjMXBxIn0.1-1aPslRK9n1m1QAS20q3g"
            />
            <Marker position={[37.37181697142589, -5.958355046060471]} icon={pandaIcon}>
              <Popup>
                <b>Pedaleo Educación</b>
              </Popup>
            </Marker>
          </MapContainer>
          <div className='whereText'>
            <b>Dirección</b>
            <p>
              Calle nuestra señora de los dolores n°21 bajo
            </p>
            <b>Móvil</b>
            <p>
              +34 611597294
            </p>
            <div className='socialIcons'>
              <a href="https://www.instagram.com/pedaleoeducacion/?hl=es" target='_blank'><img className='icon' src="https://img.icons8.com/plasticine/100/null/instagram-new--v2.png"/></a>
              <a href="https://open.spotify.com/show/4sPkmCS9KSeJvsQwPDwgVn?si=18d100af46be4397" target='_blank'><img className='icon' src="https://img.icons8.com/plasticine/100/null/spotify--v2.png"/></a>
            </div>
          </div>
        </div>
        <div className='gallery'>
          <img src={fachada} alt="" />
          <img src={insta} alt="" />
          <img src={aula} alt="" />
          <img src={poscaleo} alt="" />
        </div>
      </div>

    </Container>
  )
}

const Container = styled.div`
 

  .whereToFind{
    margin-top: 250px;
    margin-bottom: 200px;
    display: flex;
    flex-direction: column;
    gap: 100px;
  }

  h1{
    margin: 0;
  }
  .imageContainer{
    top: 150px;
    position: relative;
    height: 60vh;
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
        width: 28%;
        -webkit-box-shadow: 10px 3px 54px -6px rgba(201,190,74,0.76);
-moz-box-shadow: 10px 3px 54px -6px rgba(201,190,74,0.76);
box-shadow: 10px 3px 54px -6px rgba(201,190,74,0.76);
      }
    }
   
    .quienesButton{
      position: absolute;
      z-index: 1;
      top: 65%;
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
    background-image: url('https://conncan.org/wp-content/uploads/sites/16/2016/04/iStock-858667816.jpg');
    height: 105%;
    background-size: cover;
    object-fit: cover;
    width: 105%;
    background-position: center;
    background-attachment: fixed;
    margin: -5px;
    filter: blur(4px);
  }

  .whereContainer{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
    margin: auto;
    background: #ffff605c;
    padding: 30px;
    border-radius: 20px;
    .whereText{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-right: 140px;
    }
  }
  
  .leaflet-div-icon{
    background: none;
    border: none;
  }
  .leaflet-div-icon:hover{
    filter: brightness(1.75);
  }
  .leaflet-bottom{
    display: none;
  }
  .socialIcons{
    display: flex;
    flex-direction: row;
    gap: 20px;
    .icon{
    max-width: 60px;
  }
  }
  .gallery{
    display: flex;
    width: 900px;
    height: 530px;
    margin: auto;
    img{
      width: 0px;
      flex-grow: 1;
      object-fit: cover;
      opacity: .8;
      transition: .5s ease;
      /* background: #0000009b; */
      border: 4px solid #0000009b;
      border-radius: 20px;
    }
    img:hover{
      width: 400px;
      opacity: 1;
      filter: contrast(120%);
    }
  }
`

export default Home