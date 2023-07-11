import PropTypes from 'prop-types'

function Item ({nome, tipo}){
  return (
    <>
      <li>{nome} - {tipo}</li>
    </>
  )
}

Item.propTypes = {
  nome: PropTypes.string.isRequired,
}

Item.defaultProps = {
  nome: 'Faltou o nome',
  tipo: 'Faltou o tipo'
}

export default Item