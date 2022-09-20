import Splash from './src/Component/Splash'
import React, { useEffect, useState } from 'react'
import Sliders from './src/Component/Sliders'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import EnterNumber from './src/Component/EnterNumber'
import Onetime from './src/Component/Onetime'
import Signup from './src/Component/Signup'

const stack =createNativeStackNavigator();
const App = () => {
  const [loading,isLoaded]= useState(true)
  useEffect(()=>{
    setTimeout(() => {
      isLoaded(false)
    }, 3000);
  })
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Signup'>
        {loading?
        <stack.Screen options={{headerShown:false}} name='Splash' component={Splash}></stack.Screen>
      :null}
        <stack.Screen options={{headerShown:false}} name='Slider' component={Sliders}></stack.Screen>
        
        <stack.Screen options={{headerShown:false}} name='EnterNumber' component={EnterNumber}></stack.Screen>
        <stack.Screen options={{headerShown:false}} name='OTP' component={Onetime}></stack.Screen>
        <stack.Screen options={{headerShown:false}} name='Signup' component={Signup}></stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
   

  )
}

export default App