
import styles from './Pessoa.module.css'

function Pessoa({nome, idade, foto, profissao}){
  return(
    <>
      <div className={styles.containerDados}>
        <img src={foto} alt={nome} />
        <h2>Nome: {nome}</h2>
        <p>Idade: {idade}</p>
        <h2>Profissão: {profissao}</h2>
      </div>
    </>
  )
}

export default Pessoa
