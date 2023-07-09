import styles from './Footer.module.css'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p><span className={styles.emphasis} >Costs</span> - Copyright &copy; 2023</p>
      <ul className={styles.social_list}>
        <li><FaFacebook /></li>
        <li><FaInstagram /></li>
        <li><FaLinkedin /></li>
      </ul>
    </footer>
  )
}
export default Footer