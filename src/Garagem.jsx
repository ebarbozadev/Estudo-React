import Car from './Carro';

function Garagem(props) {
    function acaoAoClicar(mensagem, b) {
        alert(mensagem);
        console.log(b.type);
    }

    return (
        <div>
            <h1>Bem vindo a garagem {props.nome}</h1>
            <h4>Hoje {props.data} temos</h4>
            <div>
                <Car modelo='Extendido' cor='preto' valor='12.000,0' />
                <Car modelo='Curto' cor='verde' valor='54.000,0' />
                <Car modelo='Curto' cor='branco' valor='34.000,0' />
                <Car modelo='Extendido' cor='marrom' valor='87.000,0' />
            </div>

            <button onClick={(evento) => acaoAoClicar('Opa!', evento)}>Clique-me!</button>
        </div>
    )
}

export default Garagem;