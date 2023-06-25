import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'React'
  const name2 = 'JSX'

  function soma(a, b) {
    return a + b
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
     <h1>Curso de {name}</h1>
     <p>Alterando o {name2}</p>
     <p>A soma de 1 + 1 = {soma(1, 1)}</p>
     <img src={url} alt="imagem aleatória"></img>
    </div>
  );
}

export default App;
