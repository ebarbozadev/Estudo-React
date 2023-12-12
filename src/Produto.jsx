function Produto(props) {
    function comprar() {
        alert(`Você clicou para comprar o ${props.marca} ${props.nome}! Você será redimencionado para o pedido via WhatsApp!`);
    }

    return (
        <div>
            <section>
                <header>
                    <h3>{props.nome}</h3>
                    <h4>{props.marca}</h4>
                    <p>{props.descricao}</p>
                    <div>
                        <span>De: R$ {props.vlAntigo} reais Para: R$ {props.vlNovo} reais</span>
                    </div>
                    <button onClick={comprar}>Comprar</button>
                </header>
            </section>
        </div>
    )
}

export default Produto;