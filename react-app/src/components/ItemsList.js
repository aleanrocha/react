import styles from './ItemsList.module.css'
import PropTypes from 'prop-types'
function ItemsList({curso, ano}) {
  return (
    <>
      <li className={styles.listElements} >Curso: {curso} - Ano: {ano} </li>
    
    </>
  )
}
ItemsList.propTypes = {
  curso: PropTypes.string.isRequired,
  ano: PropTypes.number.isRequired
}

/*

  Valores padrões

  ItemsList.defaultProps = {
    curso: 'Faltou o Curso',
    ano: 0
  }

*/

export default ItemsList