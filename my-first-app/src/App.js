import React from 'react'
import './App.css'
import './components/HelloWorld'
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  const name = 'Arthur';

  const url = 'http://via.placeholder.com/300'


  return (
    <div className='App'>
      <h2>Olá, {name}</h2>
      <img src={url} alt="img"/>
      <HelloWorld/>
      <SayMyName nome="Arthur" />
      
      <Pessoa nome="Arthur" idade="21" profissao="Programador" foto="http://via.placeholder.com/150" />
    </div>
  );
}

export default App;
