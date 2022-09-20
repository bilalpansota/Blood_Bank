import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, TextInput} from 'react-native'
import React,{useState} from 'react'

const Conversation = () => {

  return (
    <View style={{ flex: 1, backgroundColor: "white",}}>
<View style={{ height: 80, backgroundColor: '#F44545', borderBottomStartRadius: 40, borderBottomEndRadius: 40, justifyContent: "center" }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
          <View style={{}}>
            <TouchableOpacity>
              <Image style={{ height: 24, width: 24 }} source={require('../FindDonor/src/assets/back.png')}></Image>
            </TouchableOpacity>
          </View>
          <View style={{}}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>Messages</Text>
          </View>
          <View style={{ width: 24, width: 24 }}></View>
        </View>
      </View>

<View style={{marginTop:10}}>
  <View style={{height:55,width:360,borderColor:'#F44545',borderWidth:1,alignItems:'center',justifyContent:'space-between',flexDirection:"row"}}>
    <Text style={{color:'#FF0000',fontSize:18,fontWeight:'bold',marginLeft:10}}>
      Donor #12345
    </Text>
    <TouchableOpacity style={{height:36,width:36,marginRight:10}}>
    <Image source={require('../FindDonor/src/assets/call.png')}></Image>
    </TouchableOpacity>
  </View>

  <ScrollView style={{height:'73%'}}>
    <View style={{width:'100%',justifyContent:'flex-start',flexDirection:'row'}}>
      <View style={{width:204,height:61,backgroundColor:'#EBEBEB',margin:10,borderRadius:100 ,justifyContent:'center',alignItems:'center'}}>
      <Text style={{margin:10,fontSize:14,color:'black'}}>Hello, I would like to know more about you</Text>
      </View>
    </View>

    <View style={{width:'100%',justifyContent:'flex-end',flexDirection:'row'}}>
      <View style={{width:204,height:61,backgroundColor:'#C1C1C1',margin:10,borderRadius:100 ,justifyContent:'center',alignItems:'center'}}>
      <Text style={{margin:10,fontSize:14,color:'black'}}>Yes I will give you the required</Text>
      </View>
    </View>

    <View style={{width:'100%',justifyContent:'flex-start',flexDirection:'row'}}>
      <View style={{width:204,height:61,backgroundColor:'#EBEBEB',margin:10,borderRadius:100 ,justifyContent:'center',alignItems:'center'}}>
      <Text style={{margin:10,fontSize:14,color:'black'}}>Hello, I would like to know more about you</Text>
      </View>
    </View>

    <View style={{width:'100%',justifyContent:'flex-start',flexDirection:'row'}}>
      <View style={{width:204,height:61,backgroundColor:'#EBEBEB',margin:10,borderRadius:100 ,justifyContent:'center',alignItems:'center'}}>
      <Text style={{margin:10,fontSize:14,color:'black'}}>Hello, I would like to know more about you</Text>
      </View>
    </View>
    <View style={{width:'100%',justifyContent:'flex-end',flexDirection:'row'}}>
      <View style={{width:204,height:61,backgroundColor:'#C1C1C1',margin:10,borderRadius:100 ,justifyContent:'center',alignItems:'center'}}>
      <Text style={{margin:10,fontSize:14,color:'black'}}>Yes I will give you the required</Text>
      </View>
    </View>

    <View style={{width:'100%',justifyContent:'flex-end',flexDirection:'row'}}>
      <View style={{width:204,height:61,backgroundColor:'#C1C1C1',margin:10,borderRadius:100 ,justifyContent:'center',alignItems:'center'}}>
      <Text style={{margin:10,fontSize:14,color:'black'}}>Yes I will give you the required</Text>
      </View>
    </View>

    <View style={{width:'100%',justifyContent:'flex-end',flexDirection:'row'}}>
      <View style={{width:204,height:61,backgroundColor:'#C1C1C1',margin:10,borderRadius:100 ,justifyContent:'center',alignItems:'center'}}>
      <Text style={{margin:10,fontSize:14,color:'black'}}>Yes I will give you the required</Text>
      </View>
    </View>

    <View style={{width:'100%',justifyContent:'flex-end',flexDirection:'row'}}>
      <View style={{width:204,height:61,backgroundColor:'#C1C1C1',margin:10,borderRadius:100 ,justifyContent:'center',alignItems:'center'}}>
      <Text style={{margin:10,fontSize:14,color:'black'}}>Yes I will give you the required</Text>
      </View>
    </View>

    <View style={{width:'100%',justifyContent:'flex-end',flexDirection:'row'}}>
      <View style={{width:204,height:61,backgroundColor:'#C1C1C1',margin:10,borderRadius:100 ,justifyContent:'center',alignItems:'center'}}>
      <Text style={{margin:10,fontSize:14,color:'black'}}>Yes I will give you the required</Text>
      </View>
    </View>
  </ScrollView>
</View>

<View>
  <View style={{height:60,width:'100%',justifyContent:'center',alignItems:'center'}}>
    <View style={{height:50,width:'90%',borderColor:'#F44545',borderWidth:1,borderRadius:100,alignItems:'center',flexDirection:'row',justifyContent:'space-around'}}>
      <TextInput placeholder='Type a message...'
      placeholderTextColor={'#F44545'}>
      </TextInput>
      <TouchableOpacity>
        <Image source={require('../FindDonor/src/assets/send.png')}></Image>

      </TouchableOpacity>

    </View>

  </View>
</View>

</View>

  )
}

export default Conversation

const styles = StyleSheet.create({})