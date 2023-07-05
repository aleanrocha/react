import styles from './Footer.module.css'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa6'

function Footer() {
  return (
  <footer className={styles.footer}>
    Todos os direitos reservados
    <FaFacebook />
    <FaInstagram />
    <FaLinkedin />
  </footer>)
}
export default Footer