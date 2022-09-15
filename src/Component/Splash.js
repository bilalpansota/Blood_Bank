import { View, Text ,Image} from 'react-native'
import React from 'react'

const Splash = () => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center', backgroundColor:'#fff'}}>
      <Image source={require('../images/4.png')}/>
      <Text style={{fontSize:25,fontWeight:'bold',color:'#FF0000'}}>Blood Bank App</Text>
    </View>
  )
}

export default Splash