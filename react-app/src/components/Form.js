function Form() {
  const submit = (e) => {
    e.preventDefault()
    console.log("enviado com sucesso!")
  }
  return (
    <form onSubmit={submit}>
      <div><input type="text" placeholder="Digite seu nome"/></div>
      <div><input type="text" placeholder="Digite seu sobrenome"/></div>
      <div><input type="submit" value="Enviar" /></div>
    </form>
  )
}
export default Form