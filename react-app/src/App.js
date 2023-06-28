import './App.css';
import SayMyName from './components/SayMyName';

function App() {
  const name = 'Tiringa'
  const url = 'https://via.placeholder.com/150'
  return (
    <div className="App">
      <h1>Curso de react</h1>
      <h2>Adicionando css</h2>
      <SayMyName name="Dev" />
    </div>
  );
}
export default App;