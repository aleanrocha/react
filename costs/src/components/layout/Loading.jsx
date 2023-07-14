import styles from './Loading.module.css'
import imgLoading from '../../assets/loading.svg'
const Loading = () => {
  return (
    <div className={styles.loader_container}>
      <img className={styles.loader} src={imgLoading} alt="loading logo" />
    </div>
   )
}
export default Loading