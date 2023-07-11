import styles from './List.module.css'
import Item from './Item'

function List (){

  return(
    <>
      <h1 className={styles.tituloLista}>List</h1>
      <ul className={styles.listUl}>
        <Item nome="João" tipo="Pessoa"/>
        <Item nome="Mitsubishi" tipo="Carro"/>
        <Item nome="Ana" tipo="Pessoa"/>
        <Item nome="Clara" tipo="Pessoa"/>
        <Item nome="Mazda" tipo="Marca"/>
        <Item />
      </ul>
    </>
  ) 

}

export default List