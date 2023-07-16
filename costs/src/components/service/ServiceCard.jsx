import styles from '../project/ProjectCard.module.css'
import { BsFillTrash3Fill } from 'react-icons/bs'
import Container from '../layout/Container'
const ServiceCard = ({name, id, cost, description, handleRemove}) => {
  const remove = (e) => {
    e.preventDefault()
    handleRemove(id, cost)
  }
  return (
    <div className={styles.project_card}>
      <h4>{name}</h4>
      <p>
        <span>Custo total:</span> R${cost}
      </p>
      <p>{description}</p>
      <div className={styles.project_card_options}>
        <button onClick={remove}> 
          <BsFillTrash3Fill /> Excluir
        </button>
      </div>
    </div>
  )
}
export default ServiceCard