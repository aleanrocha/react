function YourName({ setName }) {
  return (
    <div>
      <p>Digite seu nome:</p>
      <input onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" placeholder="Qual é seu nome?" />
    </div>
  )
}
export default YourName