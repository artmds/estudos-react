function Pessoa({nome, idade, foto, profissao}){
  return(
    <div>
      <img src={foto} alt={nome} />
      <h2>Nome: {nome}</h2>
      <p>Idade: {idade}</p>
      <h2>Profissão: {profissao}</h2>
    </div>
  )
}

export default Pessoa
