import { useState, createContext } from 'react'
import { claro, escuro} from '../estilosGlobais'

export const ProdutosContext = createContext();


export function ProdutosProvider({children}){

    const [quantidade, setQuantidade] = useState(0)
    const [carrinho, setCarrinho ] = useState([])
    const [ultimosVistos, setUltimosVistos ] = useState([])
    const [precoTotal, setPrecoTotal] = useState(0);


    function viuProduto(produto){
        setQuantidade(quantidade + 1)
        let novoCarrinho = carrinho
        novoCarrinho.push(produto);
        setCarrinho(novoCarrinho)

        let novoUltimosVistos = new Set(ultimosVistos)
        novoUltimosVistos.add(produto)
        setUltimosVistos([...novoUltimosVistos])

        let novoPrecoTotal = precoTotal + produto.preco;
        setPrecoTotal(novoPrecoTotal);
    }

    return (
        <ProdutosContext.Provider
        value={{
            quantidade,
            carrinho,
            ultimosVistos,
            viuProduto,
            precoTotal
        }}
        >
            {children}
        </ProdutosContext.Provider>

    )
}
