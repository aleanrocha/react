import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  const name = 'Tiringa'
  const url = 'https://via.placeholder.com/150'
  return (
    <div className="App">
      <h2>Trabalhando com props em react</h2>
      <SayMyName name="Zezinho" />
      <SayMyName name="Pedrinho" />
      <SayMyName name={name} />
      <Pessoa 
        img={url}
        name="Charlles"
        idade="25"
        job="Programador"
      />
    </div>
  );
}
export default App;