import styles from './SayMyName.module.css'

function SayMyName(props) {
  return (
    <div>
      <p className={styles.destaqueContent} >Fala ai {props.name}, suave!</p>
    </div>
  )
}
export default SayMyName