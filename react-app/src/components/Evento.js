function Evento() {
  const click = () => {alert("Opa, fui chamado!")}
  return (
    <div>
      <p>Clique para ativar o <strong>Evento</strong></p>
      <button onClick={click}>Alerta</button>
    </div>
  )
}
export default Evento