import { createContext,useState } from 'react'

export const AutenticacaoContext = createContext();


export function AutenticacaoProvider({children}){

    const [ usuario, setUsuario ] = useState({})

    function login(email, senha)
    {
        if(email === 'gabriel@mota' 
        && senha === '123'){
            setUsuario({
                nome: 'Gabriel',
                email: 'gabriel@mota',
                endereço: 'Rua Avenida, 02',
                telefone: '4002-2922'
            })
            return 'ok'
        }
        else{
            return 'Email ou senha incorreta'
    }
}

    return (
        <AutenticacaoContext.Provider
        value={{
            usuario, 
            login
        }}
        >
            {children}
        </AutenticacaoContext.Provider>

    )
}