import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Equipo() {
  return (
    
    <Container>
       <div className='imageContainer'>
        <div className='imageText'>
          <h1 data-aos="fade-right" data-aos-duration="1500">Nuestro equipo</h1>
        </div>
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
   
    
  }
  .backHome{
    opacity: 90%;
    background-image: url('https://imageio.forbes.com/specials-images/imageserve/605496ee5a1dc9d129331252/Business-people-discussing-over-new-business-project-in-office/960x0.jpg?format=jpg&width=960');
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

export default Equipo