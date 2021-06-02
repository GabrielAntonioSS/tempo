import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {Home} from './screens/home/Home'
import {Previsao} from './screens/previsao/Previsao'

const Stack=createStackNavigator()

export function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName='Home'
                screenOptions={{ headerShown: false}}
            >
                <Stack.Screen name='Home' component={Home}/> 
                <Stack.Screen name='Previsao' component={Previsao}/> 
            </Stack.Navigator> 
        </NavigationContainer>
    )
}

