import { View, Text, Image, TextInput, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'

const EnterNumber = ({navigation}) => {
  return (
    <View style={{flex:1,position:'relative'}}>
     <StatusBar ></StatusBar>
     <View style={{flex:0.45 , position:'relative'}}>
        <Image source={require('../images/shapes.png')} style={{position:'relative'}}/>
     </View>
     <View style={{flex:0.25,justifyContent:'space-between',alignItems:'center'}}>
        <Text style={{fontSize:25,fontWeight:'bold',color:'#820000'}}>Enter Mobile Number</Text>
        <TextInput
        placeholder='Enter Number'
        keyboardType='number-pad'
        
        style={{borderColor:'black',borderRadius:3,borderWidth:0.1,width:230 ,color:'#820000'}}
        />
        <TouchableOpacity style={{borderRadius:15,borderWidth:0.1,width:180,height:50,backgroundColor:'#820000',justifyContent:'center'}} onPress={()=>navigation.navigate('OTP')}><Text style={{textAlign:'center',color:'white'}}>Get OTP</Text></TouchableOpacity>
     </View>
    </View>
  )
}

export default EnterNumber