import styles from './Frase.module.css'

function Frase(){
  return(
    <div className={styles.fraseContainer}>
      <p className={styles.fraseContent}>Finge que aqui tem uma 
      frase motivacional do Naruto.</p>
    </div>
  )
}

export default Frase