import { Text, View, Switch } from 'react-native';
import { estilos } from './estilos';
import { useState, useContext } from 'react';
import { TemaContext } from '../../context/temaContext';

export default function Configuracao({ navigation }) {
  const [estado, setEstado] = useState(true);

  const { temaAtual, temaEscolhido, salvaTema} = useContext(TemaContext)

  const estilo = estilos(temaEscolhido)

  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Configuração</Text>

      <View style={estilo.inputArea}>
      <Text style={estilo.subtitulo}>Tema: {temaAtual}</Text>
      <Switch
        onValueChange={() => temaAtual === 'Escuro' ? salvaTema('Claro') : salvaTema('Escuro')}
        value={temaAtual === 'Escuro' ? true : false}
      />
      </View>
    </View>
  );
}

