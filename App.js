import Rotas from "./src/rotas";
import { TemaProvider } from './src/context/temaContext'
import { AutenticacaoProvider } from './src/context/autenticacaoContext'
import { ProdutosProvider } from './src/context/produtosContext'

export default function App() {
  return (
    <TemaProvider>
      <AutenticacaoProvider>
      <ProdutosProvider>
        <Rotas /> 
      </ProdutosProvider>
      </AutenticacaoProvider>
    </TemaProvider>
  );
}