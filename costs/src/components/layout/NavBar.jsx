import { Link } from 'react-router-dom'
import logo from '../../assets/costs_logo.png'
import styles from './NavBar.module.css'
import Container from './Container'

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Link to='/' ><img src={logo} alt='costs' /></Link>
        <ul className={styles.list}>
          <li className={styles.item}><Link to='/' >Início</Link></li>
          <li className={styles.item}><Link to='/Projects' >Projetos</Link></li>          
          <li className={styles.item}><Link to='/Company' >Empresa</Link></li>
          <li className={styles.item}><Link to='Contact' >Contato</Link></li>
        </ul>
      </Container>
    </nav>
  )
}
export default NavBar