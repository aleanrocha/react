import { useState } from 'react'

function Condicional() {
  const sendMail = (e) => {
    e.preventDefault()
    setUserEmail(email)
  }
  const clearMail = () => {setUserEmail('')}

  const [email, setEmail] = useState()
  const [userEmail, setUserEmail] = useState()
  return (
    <div>
      <h2>Cadastre seu e-mail</h2>
      <form>
        <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder='exemple@gmail.com' />
        <input onClick={sendMail} type="submit" value="Enviar" />
        {userEmail && (
          <div>
            <p>O e-mail <br/> [ {userEmail} ] <br/> foi enviado!</p>
            <button onClick={clearMail}>Limpar e-mail</button>
          </div>
        )}
      </form>
    </div>
  )
}
export default Condicional