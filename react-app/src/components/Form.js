import { useState } from 'react'
import styles from './Form.module.css'

function Form() {

  const submit = (e) => {
    e.preventDefault()
    console.log(`Usuário ${name}foi cadastrado com a senha ${password}`)
  }

  const [name, setName] = useState()
  const [password, SetPassword] = useState()

  return (
    <main>
      <h2>Cadastro</h2>
      <form onSubmit={submit}>
        <div>
          <label htmlFor="user">Nome:</label>
          <input 
          type="text" 
          id="user" 
          name="user" 
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input t
          type="password" 
          id="password" 
          name="password" 
          placeholder="*********"
          onChange={(e) => SetPassword(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="Entrar" />
        </div>
      </form>
    </main>
  )
}
export default Form