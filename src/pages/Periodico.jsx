import React from 'react'
import styled from 'styled-components'


function Periodico() {
  return (
    <Container>
      <div className='imageContainer'>
        <div className='imageText'>
          <h1 data-aos="fade-right" data-aos-duration="1500">Periódico</h1>
        </div>
        <div className='backHome'>

        </div>
      </div>
      <div className='equipoContainer'>
          <div className='members'>
            <div className='member'>
              <img src="https://img.icons8.com/ios-filled/50/null/school.png" alt="" />
              <a href='https://redined.educacion.gob.es/xmlui/bitstream/handle/11162/81300/00820113012348.pdf?sequence=1&isAllowed=y' target={'_blank'}>Educación emocional</a>
            </div>
            <div className='member'>
              <img src="https://img.icons8.com/glyph-neue/64/null/books.png" alt="" />
              <a href='https://dialnet.unirioja.es/servlet/articulo?codigo=2040741' target={'_blank'}>Aprendizaje basado en problemas</a>
            </div>
            <div className='member'>
              <img src="https://img.icons8.com/ios-filled/100/null/graduation-cap.png" alt="" />
              <a href='https://revistas.ucm.es/index.php/RCED/article/view/61992/4564456553086' target={'_blank'}>La educación personalizada según García Hoz</a>
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
    background-image: url('https://media.istockphoto.com/id/948887592/vector/vector-seamless-pattern-newspaper.jpg?s=612x612&w=0&k=20&c=nV0D4gJ12tAFDHCcOS6ckNs9SSlAQLiW9ObHTDHFS5I=');
    height: 105%;
    background-size: cover;
    object-fit: cover;
    width: 105%;
    background-position:center;
    background-attachment: fixed;
    margin: -5px;
    filter: blur(4px);
  }

  .equipoContainer{
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
    .members{
    display: flex;
    flex-direction: row;
    margin-bottom: 50px;
    gap:30px;
    .member{
      width: 33%;
      background: #8feaffd1;
      padding: 20px;
      border-radius: 20px;
      -webkit-box-shadow: 4px 7px 31px 4px rgba(107,156,179,1);
-moz-box-shadow: 4px 7px 31px 4px rgba(107,156,179,1);
box-shadow: 4px 7px 31px 4px rgba(107,156,179,1);
      img{
        max-width: 70px;
        max-height: 70px;
      }
     
     
    }
  }
  }
`

export default Periodico