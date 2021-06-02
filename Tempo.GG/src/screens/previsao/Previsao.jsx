import React from 'react'
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import index from './Index'
import chuva from '../../assets/img/chuva.png'
import nublado from '../../assets/img/nublado.png'
import sol from '../../assets/img/sol.png'


export function Previsao({ navigation, route }) {

    const localidade = route.params.localidade
    const temperaturaAtual = converte(route.params.temperaturaAtual)
    const temperaturaMax = converte(route.params.temperaturaMax)
    const temperaturaMin = converte(route.params.temperaturaMin)

    function converte(kelvin) {
        const graus = parseInt(kelvin)
        const converte = graus - 273
        return (converte)

    }

    return (
        <SafeAreaView style={index.tela}>

            <View style={index.logo}>
                <Text style={index.logo}>Tempo.GG</Text>
            </View>

            <View>
                <Text style={index.titulo}>
                    {localidade}
                </Text>
            </View>

            <View style={index.caixaDeStatus}>

                {temperaturaAtual >= 9 && temperaturaAtual <= 14 &&
                    <>
                        <Image source={chuva} style={index.iconeClima} />

                        <Text style={index.statusClima}>
                            clima chuvoso
                    </Text>
                    </>
                }
                {temperaturaAtual >= 15 && temperaturaAtual <= 18 &&
                    <>
                        <Image source={nublado} style={index.iconeClima} />

                        <Text style={index.statusClima}>
                            clima nublado
                    </Text>
                    </>
                }
                {temperaturaAtual >= 19 && temperaturaAtual <= 30 &&
                    <>
                        <Image source={sol} style={index.iconeClima} />

                        <Text style={index.statusClima}>
                            clima ensolarado
                    </Text>
                    </>
                }

            </View>

            <View style={index.temperatura}>
                <Text style={index.tempAtual}>
                    {temperaturaAtual}º
                </Text>
                <View style={index.temperaturas}>
                    <View>
                        <Text style={index.tempMM}>
                            ↓ {temperaturaMin}º
                        </Text>
                    </View>

                    <View>
                        <Text style={index.tempMM}>
                            ↑ {temperaturaMax}º
                        </Text>
                    </View>
                </View>
            </View>

            <View>
                <TouchableOpacity style={index.botao} onPress={() => navigation.navigate('Home')} >
                    <Text style={index.nameB}>
                        Voltar
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

