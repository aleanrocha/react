import './App.css';
import SayMyName from './components/SayMyName';
import List from './components/List';

function App() {
  const name = 'Tiringa'
  const url = 'https://via.placeholder.com/150'
  return (
    <div className="App">
      <h1>Curso de react</h1>
      <h2>Utilizando Fragments</h2>
      <SayMyName name="Dev" />
      <List/>
    </div>
  );
}
export default App;