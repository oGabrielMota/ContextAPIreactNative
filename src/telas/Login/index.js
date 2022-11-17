import { useState, useContext } from "react";
import { Text, View, TextInput, TouchableOpacity, StatusBar,Alert } from 'react-native';
import { TemaContext } from '../../context/temaContext';
import { AutenticacaoContext } from '../../context/autenticacaoContext';
import { estilos } from './estilos';

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  
  const { temaEscolhido } = useContext(TemaContext)

  const estilo = estilos(temaEscolhido)
  
  const { login } = useContext(AutenticacaoContext)

  function logado(){
    const resultado = login(email,senha)
    if(resultado == 'ok'){
      navigation.navigate('Principal')
    }
    else{
      Alert.alert(resultado)
    }
  }

  

  return (
    <View style={estilo.container}>
      <StatusBar />
      <Text style={estilo.titulo}>Login</Text>

      <View style={estilo.inputArea}>
        <TextInput
          style={estilo.input}
          placeholder="Email"
          placeholderTextColor="#999"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={estilo.input}
          placeholder="Senha"
          placeholderTextColor="#999"
          autoCapitalize="none"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity
        style={estilo.botao}
        onPress={() => logado()}
      >
        <Text style={estilo.botaoTexto}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

