import './App.css'
import { useState } from 'react'
import YourName from './components/YourName'
import Saudacao from './components/Saudacao'
function App() {
  const [name, setName] = useState()
  return (
    <div className="App">
      <h1>Curso de react</h1>
      <h2>Trabalhando com o (State Lift)</h2>
      <YourName setName={setName} />
      <Saudacao nome={name} />
    </div>
  )
}
export default App