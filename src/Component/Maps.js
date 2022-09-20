import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView} from 'react-native'
import React,{useState} from 'react'

const Maps = () => {

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
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>Find Donor</Text>
          </View>
          <View style={{ width: 24, width: 24 }}></View>
        </View>
      </View>



    <View style={{margin:20,}}>
      <View style={{justifyContent:'center',}}>
        <Text style={{color:'black',fontWeight:"600",fontSize:18}}>Donors in your Location are:</Text>
        <View style={{width:326,height:400,backgroundColor:'grey',marginTop:20,alignItems:'center',justifyContent:'center'}}><Text style={{fontSize:40}}>(Map View Here)</Text></View>
      
      <View style={{justifyContent:"center",alignItems:'center',marginTop:50}}>
      <TouchableOpacity>
        <Image source={require('../FindDonor/src/assets/communications.png')}></Image>
      </TouchableOpacity>
      </View>
      
      </View>

    </View>
    </View>
  )
}

export default Maps

const styles = StyleSheet.create({})