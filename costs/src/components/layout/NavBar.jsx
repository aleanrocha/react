import { Link } from 'react-router-dom'
import { FaRegWindowClose, FaBars } from 'react-icons/fa'
import logo from '../../assets/costs_logo.png'
import styles from './NavBar.module.css'
import Container from './Container'

const NavBar = () => {
  const showMenu = () => {document.querySelector('ul').style.left = '0'}
  const closeMenu = () => {document.querySelector('ul').style.left = '100%'}
  return (
    <nav className={styles.navbar}>
      <Container>
        <Link to='/' ><img src={logo} alt='costs' /></Link>
        <FaBars className={styles.show_menu} onClick={showMenu} />
        <ul className={styles.list}>
          <li><FaRegWindowClose className={styles.close_menu} onClick={closeMenu} /></li>
          <li onClick={closeMenu} className={styles.item}><Link to='/' >Início</Link></li>
          <li onClick={closeMenu} className={styles.item}><Link to='/Projects' >Projetos</Link></li>          
          <li onClick={closeMenu} className={styles.item}><Link to='/Company' >Empresa</Link></li>
          <li onClick={closeMenu} className={styles.item}><Link to='Contact' >Contato</Link></li>
        </ul>
      </Container>
    </nav>
  )
}
export default NavBar