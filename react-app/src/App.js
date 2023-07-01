import './App.css'
import OutraLista from './components/OutraLista'

function App() {
  const meusItens = ['React', 'Angular', 'Vue', 'Next']
  return (
    <div className="App">
      <h1>Curso de react</h1>
      <h2>Renderização de listas</h2>
      <OutraLista itens={meusItens} />
      <OutraLista itens={[]} />
    </div>
  )
}
export default App