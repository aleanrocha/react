function Pessoa({img,name,idade,job}) {
  return (
    <div>
      <img src={img} alt={name} />
      <h3>Nome: {name}</h3>
      <h3>Idade: {idade}</h3>
      <h3>Profissão: {job}</h3>
    </div>
  )
}
export default Pessoa