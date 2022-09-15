import { View, Text ,Image, TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const SignUp = () => {
  return (
    <LinearGradient style={{flex:1,position:'relative'}} colors={['#FA4848','#820000']}>
    
   <View>
   
    <Image style={{alignItems:'flex-end',marginLeft:235}} source={require('../images/5.png')}></Image>
   
   </View>
 
    
   <View style={{ padding:20,margin:15, justifyContent:'space-between'}} >
   <Text style={{fontSize:30,fontWeight:'bold', color:'white'}}>
        SignUp
    </Text>

   <Text style={{fontSize:15, color:'white'}}>
        Enter Full Name
    </Text>
    <TextInput style={{borderBottomColor:'white', borderWidth:0.3,borderRadius:30,padding:12}}/>
    
   <Text style={{fontSize:15, color:'white'}}>
        Date of Birth
    </Text>
    <TextInput style={{borderBottomColor:'white', borderWidth:0.3,borderRadius:30,padding:12}}/>
    
   <Text style={{fontSize:15, color:'white'}}>
        Age
    </Text>
    <TextInput style={{borderBottomColor:'white', borderWidth:0.3,borderRadius:30,padding:12}}/>
    
   <Text style={{fontSize:15, color:'white'}}>
        Prevailing Health Conditions
    </Text>
    <TextInput style={{borderBottomColor:'white', borderWidth:0.3,borderRadius:30,padding:12}}/>
    
   <Text style={{fontSize:15, color:'white'}}>
       Blood Group
    </Text>
    <TextInput style={{borderBottomColor:'white', borderWidth:0.3,borderRadius:30,padding:12}}/>
   
   </View>
   <View style={{justifyContent:'center',alignItems:'center' , marginTop:10}}>
   <TouchableOpacity style={{borderRadius:15,borderWidth:0.1,width:200,height:50,backgroundColor:'#fff',justifyContent:'center'}} onPress={()=>navigation.navigate('OTP')}><Text style={{textAlign:'center',color:'#820000',elevation:100}}>Register For Checkup</Text></TouchableOpacity>
   </View>
    </LinearGradient>
  )
}

export default SignUp