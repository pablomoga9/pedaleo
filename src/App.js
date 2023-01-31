import './App.css';
import React from 'react';
import Header from './components/Header';
import Main from './pages/Main';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Header/>
      <Main/>
      <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
