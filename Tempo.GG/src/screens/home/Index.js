import React from 'react'
import {StyleSheet} from 'react-native'

const style = StyleSheet.create({
    tela:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#91D7FE', 
        width:'100%',
        height:'100%',
        paddingTop:250
    },
    titulo:{
        fontSize:48,
        fontWeight:"700",
        color:'#fff'
    },
    input:{
        backgroundColor:'#fff',
        width:250,
        height:40,
        padding:5,
        marginTop:180
    },
    botao:{
        backgroundColor:'#66E2FD',
        paddingLeft:10,
        paddingRight:10,
        marginTop:20
    },
    nameB:{
        color:'#fff',
        fontSize: 22,
    }
})
export default style;