import Button from "./eventos/Button"
function Evento() {
  const firstEvent = () => {alert("Opa, Primeiro evento!")}
  const secondEvent = () => {alert("Opa, Segundo evento!")}
  return (
    <div>
      <p>Clique para ativar o <strong>Evento</strong></p>
      <Button event={firstEvent} text="Primeiro evento" />
      <Button event={secondEvent} text="Segundo evento" />
    </div>
  )
}
export default Evento