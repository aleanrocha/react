function OutraLista({ itens }) {
  return (
    <>
      <h3>Meus cursos favoritos:</h3>
      {
        itens.length > 0 ? (
          itens.map((item, index) => <p key={index}>{item}</p>)
        ) : (
            <p>Não há itens na lista!</p>
        )
      }
    </>
  )
}
export default OutraLista