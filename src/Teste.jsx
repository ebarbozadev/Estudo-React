import Produto from './Produto';

function Teste() {
    return (
        <div>
            <h1>Bem vindo ao nosso catálogo digital!</h1>
            <Produto
                nome='Homem'
                marca='Kaiak'
                descricao='Sunt consectetur esse pariatur pariatur anim tempor proident consequat deserunt aliquip sint sunt.'
                vlAntigo='99,90'
                vlNovo='79,90'
            />

            <Produto
                nome='Tradicional '
                marca='Natura'
                descricao='Sunt consectetur esse pariatur pariatur anim tempor proident consequat deserunt aliquip sint sunt.'
                vlAntigo='56,90'
                vlNovo='49,90'
            />

            <Produto
                nome='Feminino Tradicional'
                marca='Kriska'
                descricao='Sunt consectetur esse pariatur pariatur anim tempor proident consequat deserunt aliquip sint sunt.'
                vlAntigo='199,90'
                vlNovo='179,90'
            />

            <Produto
                nome='Clássico'
                marca='Luna'
                descricao='Sunt consectetur esse pariatur pariatur anim tempor proident consequat deserunt aliquip sint sunt.'
                vlAntigo='169,90'
                vlNovo='139,90'
            />
        </div>
    )
}

export default Teste;