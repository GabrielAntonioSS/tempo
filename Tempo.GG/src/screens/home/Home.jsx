import React, {useState} from 'react';
import { View, SafeAreaView, Text, TextInput, TouchableOpacity } from 'react-native';
import { Previsao } from '../previsao/Previsao';
import index from "./Index";
import axios from 'axios'

export function Home({navigation}) {

    const[input, setInput] = useState('')

    const getApi =()=>{
        const url=`http://api.openweathermap.org/data/2.5/weather?q=${input}&appid=b4aee0a6e9c7ea72e8f386fd997768f3`

        axios.get(url).then(
            (res) => {
                const consulta = {
                    localidade: res.data.name,
                    temperaturaAtual: res.data.main.temp,
                    temperaturaMax: res.data.main.temp_max,
                    temperaturaMin: res.data.main.temp_min
                }
                navigation.navigate('Previsao', consulta)
            }
        )
    }

    return (
        <SafeAreaView style={index.tela}>
            <View>
                <Text style={index.titulo}>Tempo.GG</Text>               
            </View>

            <View>
                <TextInput style={index.input} value={input} onChangeText={setInput} placeholder='cidade: '/>
            </View> 
            
            <View>
                <TouchableOpacity style={index.botao} onPress={()=>getApi()} >
                    <Text style={index.nameB}>
                        Buscar
                    </Text>                   
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
