import { useState, createContext,useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { claro, escuro} from '../estilosGlobais'

export const TemaContext = createContext();


export function TemaProvider({children}){

    const [temaAtual, setTemaAtual ] = useState('Escuro')

    const temas = {
        'Escuro': escuro,
        'Claro': claro
      }
    
    useEffect( async () => {
        const temaSalvo = await AsyncStorage.getItem('@tema')
        if(temaSalvo){
            setTemaAtual(temaSalvo)
        }
    }, [])

    async function salvaTema(tema){
        await AsyncStorage.setItem('@tema', tema)
        setTemaAtual(tema)
    }

    return (
        <TemaContext.Provider
        value={{
            temaAtual,
            setTemaAtual,
            temaEscolhido: temas[temaAtual],
            salvaTema
        }}
        >
            {children}
        </TemaContext.Provider>

    )
}
