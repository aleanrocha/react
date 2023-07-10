import styles from './Home.module.css'
import savings from '../../assets/savings.svg'
import LinkButton from '../layout/LinkButton'
const Home = () => {
  return (
    <section className={styles.home_container}>
      <h1>Bem vindo ao <span>Costs</span></h1>
      <p>Não perca tempo, Começe a gerenciar seus projetos agora mesmo!</p>
      <LinkButton to='/NewProject' text='Criar projeto' />
      <img src={savings} alt="costs" />
    </section>
  )
}
export default Home