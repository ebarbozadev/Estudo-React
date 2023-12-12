import './App.css';

function App() {

  const myArray = ['apple', 'banana', 'orange'];

  const myList = myArray.map((item) => <p>{item}</p>)

  console.log(myList);

  const aluno = ['Emanuel', 20, 235477];

  const [nome, idade, ra] = aluno;

  console.log(`
    Nome: ${nome}
    Idade: ${idade} 
    RA: ${ra}
  `);

  function calculadora(a, b) {
    let adicao = a + b;
    let subtracao = a - b;
    let multiplicacao = a * b;
    let divisao = a / b;

    return [adicao, subtracao, multiplicacao, divisao];
  }

  const [adicao, subtracao, multiplicacao, divisao] = calculadora(4, 8);

  console.log(`
    Adição: ${adicao}
    Subtração: ${subtracao}
    Multiplicação: ${multiplicacao}
    Divisão: ${divisao}
  `)

  const veiculoUm = {
    marca: 'Ford',
    modelo: 'Extendido',
    tipo: 'Carro',
    ano: 2021,
    cor: 'preto'
  }
  
  function veiculo({modelo, cor}) {
    const mensagem = `Meu ${modelo} é ${cor}`;
      
    console.log(mensagem);
  }
  
  veiculo(veiculoUm);

  const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
  
  const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
  }
  
  const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
  
  //Check the result object in the console:
  console.log(myUpdatedVehicle);

  return (
    <div className="App">
      <ul>

      </ul>
    </div>
  );
}

export default App;