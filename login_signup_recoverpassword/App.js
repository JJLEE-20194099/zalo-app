import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {useEffect} from 'react'
import { theme } from './src/core/theme'
import FontManager from 'react-native-font-weight';
 
import {
  StartScreen,
  LoginScreen,
  FirstRegisterScreen,
  SecondRegisterScreen,
  CreatePassWord,
  ResetPasswordScreen,
  Dashboard,

} from './src/screens'

const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="FirstRegisterScreen" component={FirstRegisterScreen} />
          <Stack.Screen name="SecondRegisterScreen" component={SecondRegisterScreen} />
          
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />

          <Stack.Screen
            name="CreatePassWord"
            component={CreatePassWord}
          />
          
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
