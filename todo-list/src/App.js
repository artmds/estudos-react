import './App.css';
import { useEffect, useState } from 'react';


function App() {

  let [lista, setLista] = useState([])
  let [novoItem, setNovoItem] = useState("")

  useEffect(() => { 
    setLista(["Tarefa1", "Tarefa2", "Tarefa3"])
  }, [])

  return(
    <div className='container'>
      <div className='todo-header'>
        <input value={novoItem} onChange={value => setNovoItem(value.target.value)} type='text'/>
        <button onClick={() => adicionarNovoItem()}>Adicionar</button>
      </div>
      
      <ul className='todo-list'>
        {lista.map((item, index) => (
        <li key={index} className='todolist-item'>
          {item}
          <button onClick={() => deletarItem(index)}>Deletar</button>
        </li> ))}  
      </ul>
    </div>
  );
      
  function adicionarNovoItem(){
   setLista([...lista, novoItem]) 
   setNovoItem("")
  }

  function deletarItem(index){
    let tempArray = [...lista];
    tempArray.splice(index, 1);

    setLista(tempArray);
  }

}

export default App;
