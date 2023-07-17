import styles from './Contact.module.css'
import Container from '../layout/Container'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'
const Contact = () => {
  return (
    <div className={styles.contact_container}>
      <h1>Contato</h1>
      <form>
        <Input
          type='text'
          name='name'
          placeholder='Digite seu nome'
        />
        <Input
          type='text'
          name='lastname'
          placeholder='Digite seu sobrenome'
        />
        <Input
          type='number'
          name='phone'
          placeholder='Digite seu telefone'
        />
        <Input
          type='email'
          name='email'
          placeholder='Digite seu e-mail'
        />
        <SubmitButton text='Enviar' />
      </form>
    </div>
  )
}
export default Contact