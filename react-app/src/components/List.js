import ItemsList from "./ItemsList"
import styles from './ItemsList.module.css'
function List() {
  return (
    <>
      <h2>Lista Cursos</h2>
      <ul className={styles.listContent}>
        <ItemsList curso="HTML" ano={2020} />
        <ItemsList curso="CSS" ano={2020} />
        <ItemsList curso="JAVASCRIPT" ano={2022} />
        <ItemsList curso="NODEJS" ano={2022} />
        <ItemsList curso="JAVA" ano={2023} />
      </ul>
    </>
  )
}
export default List