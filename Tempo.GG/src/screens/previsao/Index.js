
import {StyleSheet} from 'react-native'

const style = StyleSheet.create({
    logo:{
        marginRight: 160,
        fontSize: 20,
        color:'#fff',
        marginVertical: -95
    },
    tela:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#91D7FE', 
        width:'100%',
        height:'100%',
        paddingTop:250,
    },
    titulo:{
        fontSize:48,
        fontWeight:"700",
        color:'#fff',
        marginTop: 220
    },  
    caixaDeStatus:{
        flexDirection:'column',
        alignItems:'center',
        marginTop:80
    },
    iconeClima:{
        width:100,
        height:100
    },
    statusClima:{
        fontSize:30,
        color:'#fff',
        marginTop:20
    },
    tempAtual:{
        fontSize:40,
        color:'#fff',
        marginTop:20     
    },
    temperatura:{
        alignItems:'center'
    },
    temperaturas:{
        flexDirection: 'row',
    },
    tempMM:{
        fontSize:30,
        color:'#fff',
        marginLeft:35,
        marginRight:35,
        marginTop:30  
    },
    botao:{
        backgroundColor:'#66E2FD',
        paddingLeft:15,
        paddingRight:15,
        marginTop:170,
        marginLeft: 300,
    },
    nameB:{
        color:'#fff',
        fontSize: 22
    }
})
export default style;