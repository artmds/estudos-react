import React from 'react'
import './App.css'
import './components/HelloWorld'
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';


function App() {

  return (
    <div className='App'>
    
      <Frase />

      <HelloWorld/>
      <SayMyName nome="Barney" />
      <Pessoa nome="Arthur" idade="21" profissao="Programador" 
      foto="http://via.placeholder.com/150" />

      <List />
    </div>
  );
}

export default App;
