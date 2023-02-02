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
import { Rating } from '@mui/material';
AOS.init();

function Home() {
  const pandaIcon = new L.Icon({
    iconUrl: require('../assets/pandaIcon.png'),
    iconAnchor: null,
    popupAnchor: [0, -5],
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
      <div data-aos="fade-right" data-aos-duration="1500" className='whereToFind'>
        <h1>DÓNDE ENCONTRARNOS</h1>
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
            <div className='addressText'>
              <b>Dirección</b>
              <p>
                Calle nuestra señora de los dolores n°21 bajo
              </p>
              <b>Móvil</b>
              <p>
                +34 611597294
              </p>
            </div>
            <div className='socialIcons'>
              <a href="https://www.instagram.com/pedaleoeducacion/?hl=es" target='_blank'><img className='icon' src="https://img.icons8.com/plasticine/100/null/instagram-new--v2.png" /></a>
              <a href="https://open.spotify.com/show/4sPkmCS9KSeJvsQwPDwgVn?si=18d100af46be4397" target='_blank'><img className='icon' src="https://img.icons8.com/plasticine/100/null/spotify--v2.png" /></a>
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
      <div className='reviews'>
        <div className='reviewTop'>
          <h1>RESEÑAS</h1>
        </div>
        <div className='reviewsAndMore'>
          <div className='ratingAverage'>
            <h1>5.0</h1>
            <Rating className='rating' name="read-only" value={5} readOnly />
            <a href="https://www.google.com/search?q=pedaleo+educacion&oq=pedaleo+educacion&aqs=chrome.0.69i59j69i60l3.2408j0j7&sourceid=chrome&ie=UTF-8#lrd=0xd126f5368af4a09:0xedaa265bbf509112,1,,,," target={'_blank'}>Ver más opiniones</a>
          </div>
          <div className='reviewsContainer'>
            <div className='review'>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAmVBMVEV6H6L///98IKO+ktF4GKGMSq3v5fOeYbt5G6GALqbKsNn48fp6GKP//v+6kM56H6Dt4fOfZrtzAJ11DJ/aw+SLP66eZLubW7mXU7aLOq6BI6i1hcvy6/bn2u7f0ujSu96GLavWu+OSSLXEoNSob8SPUq+BM6e7jc/byeWqeMOlbr+AKKXDmtTIqNiNTa6yhcnFo9XOrtuebLk71uVLAAADb0lEQVR4nO3caVfiMBiG4bRTsAJladgcdnEBGUX9/z9ukDUFHJpykL6d+/JLVeLJc942bZoclQIAAAAAAAAAAAAAAAAAAAAAAAAAALg8/9odwKVVrt0BnOJ7MfiSr9VG8+aEVjt39zsMtSczptvp5k+pVnu9/qDcHIZaYEj3lxNPEBS7k84w9NYNxQxAsROuc47uF1elqFto/ITB4uvLqD1b1VFITMsaLqOOc5IGnQQJHadf807/5bRIlNDJd67d7/jij6WRo2JnXcXF6epeN8EpkYTFowIz4/abB71sX0n9fSOS8HF2e8zTffO5vq3h5mC4rGL6h5xIwpyn/GM8T4fhQzVwTN2hjOFmP+ERqzK5OnzOmydqMCqlv4AqVsINX7cnZhmLU/1TvTyHRUKldC4ScXIroYhWCZVuV80iziUU0S6h0i9mEQszAYONZUKlx8bney0v5TdDZZ/Q12YRywJOU9uEKvxjNHidXb6H57JO6N2ao2kj/aOpdUKl87sG+cf0zxTtE3qvRgsBE8UECadGi+liME15FRMkrBktOpmsYctoMU95AVWihG9Gi/LFO3g2Eh7ybjJ/lj5ExtKL9/BcCRLOjRafWUyoR7s3i8VmBhN+TS62CXtvGUwYuR0WnjI40oQTo8FYwPK39RzfvFeIeNtmldBdzA77xgrG1/Qw9UW0q6Ff+jBeYgTvEt4J2yUM50Xj49WWl/qVp/2EpcPfG8d+ODUDOoVQQAnj19D3vDvzJdTiZjiUEDBWwuXi0yw37UUCFqfhD/c1mWhCXTrCnTVytfl7NJ/jvMoIGE04KBw1qk+W62qRhe66lP1R1jsV1k+l9Ub6n0hXku3FcOr3Ap7XVhLUcOHjSUoFk9Uw/yLiRrhmn7BbGAp43t6x3ZtYHbQlFVDZJQx69XFbb6/A1D+RrpgJg3+E6/YH7+XWUMsZYTYiNRyXj3mez6efzbc7V+ZO78O5RXRS67ub3fzrn4oLaTE/TP+mhKP2E347fLiqIjNizBq6SszYuc/+nbc0JJSPhPKRUD4SykdC+UgoHwnlI6F8JJSPhPKRUD4SykdC+bKfUGU+odvJVzfyOXHLn3E0ajszeSu8MZj/ke7afbmIvXXd7NXQr2Qv0wH/m+MMcqXutgAAAAAAAAAAAAAAAAAAAAAAAAAA4D/3F8hXMWDAZh5zAAAAAElFTkSuQmCC" alt="" />
              <h3>Paula Guerrero</h3>
              <Rating className='rating' name="read-only" value={5} readOnly />
              <p>Los profes son muy buenos, están muy pendientes de los alumnos y se notan los resultados! Muchas gracias por todo!</p>
            </div>
            <div className='review'>
              <img src="https://i.pinimg.com/236x/a3/e5/2b/a3e52bf536eef4d9a85bdc0df555c8b3.jpg" alt="" />
              <h3>Víctor Zamora</h3>
              <Rating className='rating' name="read-only" value={5} readOnly />
              <p>Grandes personas y profesionales. Se involucran al máximo , están ayudando mucho a mi hija  en su aprendizaje.</p>
            </div>
            <div className='review'>
              <img src="https://play-lh.googleusercontent.com/-jFo_0ck9aMo/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclKbqK4JUDyhSJDaB4DploAG34IIg/photo.jpg" alt="" />
              <h3>MAURICIO Wamba</h3>
              <Rating className='rating' name="read-only" value={5} readOnly />
              <p>Muy buena atención a los alumnos y el interés mostrado por el profesorado.</p>
            </div>
          </div>

        </div>

      </div>
    </Container>
  )
}

const Container = styled.div`
 

  .whereToFind{
    margin-top: 250px;
    margin-bottom: 140px;
    display: flex;
    flex-direction: column;
    /* gap: 100px; */
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

  .whereToFind{
    h1{
      color: #56beff;
      padding: 20px 20px 50px;
      width: 30%;
      margin: auto;
      border-style: dashed solid;
      border-bottom-style: none;
      border-color: #00a2ff;
      margin-bottom: 0;
      background: #60e2ff1e;
    }
  }

  .whereContainer{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
    margin: auto;
    background: #60e2ff5c;
    border: 3px solid #00a2ff;
    padding: 30px;
    border-radius: 20px;
    margin-top: 0;
    margin-bottom: 50px;
    .whereText{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      /* margin-right: 115px; */
      width: 50%;
      p{
        font-size: 20px;
      }
      b{
        font-size: 25px;
      }
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
  .icon:hover{
    filter: brightness(1.5);
  }
  }
  .gallery{
    display: flex;
    width: 1400px;
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

  .reviews{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 20px;
   .reviewTop{
      margin: auto;
      border-style: dashed solid;
      border-bottom-style: none;
      border-color: #00a2ff;
      margin-bottom: 0;
      width: 30%;
      background: #60e2ff1e;
      h1{
      color: #56beff;
      padding: 20px 20px 50px;
      margin: auto;
      
    }
   }
    .reviewsAndMore{
      background: #60e2ff5c;
    border: 3px solid #00a2ff;
    padding: 30px;
    border-radius: 20px;
    margin-top: 0;
    margin-bottom: 50px;
    .ratingAverage{
      display: flex;
      justify-content: center;
      gap: 20px;
      align-items: center;
      margin-bottom: 30px;
      a{
        text-decoration: none;
       
        color: black;
      padding: 10px;
      background: #e3e30f;
      border-radius: 10px;
      }
      a:hover{
        background: #ffff3c;
        transition: .2s ease;
        color: #5e5713;
      }
      .rating{
        padding: 5px;
      background: #4a9eb15c;
      border-radius: 20px;
      }
    }
    .reviewsContainer{
      display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
    margin: auto;
    
    gap: 30px;
    .rating{
      padding: 5px;
      background: #4a9eb15c;
      border-radius: 20px;
    }

    .review{
      background:#9dedff5c;
      padding: 30px;
      border-radius: 10px;
      width: 33%;
      img{
        max-width: 75px;
        border-radius: 50px;
      }
    }
    }
    }
    
  }
`

export default Home