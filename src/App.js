import React from 'react';
import './App.css';
import Cabecalho from './Components/Cabecalho/Cabecalho';
import Banner from './Components/Banner/Banner';
import Video from './Components/Video/Video';
import Footer from './Components/Footer/Footer';
import Formulario from './Components/Formulario/Formulario';

function App() {
  return (
    <div className="App">
      <Cabecalho/>
      <Banner/>
      <Video/>
      <Formulario/>
      <Footer/>
    </div>
  );
}

export default App;
