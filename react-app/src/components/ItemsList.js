import styles from './ItemsList.module.css'
function ItemsList() {
  return (
    <>
      <ul className={styles.listContent}>
        <li className={styles.listElements}>HTML</li>
        <li className={styles.listElements}>CSS</li>
        <li className={styles.listElements}>JAVASCRIPT</li>
        <li className={styles.listElements}>NODEJS</li>
        <li className={styles.listElements}>JAVA</li>
      </ul>
    </>
  )
}
export default ItemsList