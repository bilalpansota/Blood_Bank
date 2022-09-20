import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView} from 'react-native'
import React,{useState} from 'react'

const Messages = () => {
  const [requester, setRequester] = useState([
    { key: 1, item: 'Donor #1234', text:'Hello, I am Available' },
    { key: 2, item: 'Donor #3525',text:'You still looking for the blood?' },
    { key: 3, item: 'Donor #3535',text:'Thank You' },
    { key: 4, item: 'Donor #5456', text:'Can you help me?'},
    { key: 5, item: 'Donor #7534',text:'No' },
    { key: 6, item: 'Donor #7539',text:'Somtimes yes' },
    { key: 7, item: 'Donor #4257', text:'Not Reallys'},
    { key: 8, item: 'Donor #8567',text:'It is what it is' },
    { key: 9, item: 'Donor #2485',text:'okay' },
  ])
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
{/* Header */}
<View style={{ height: 80, backgroundColor: '#F44545', borderBottomStartRadius: 40, borderBottomEndRadius: 40, justifyContent: "center" }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
          <View style={{}}>
            <TouchableOpacity>
              <Image style={{ height: 24, width: 24 }} source={require('../BloodMessages/src/assets/back.png')}></Image>
            </TouchableOpacity>
          </View>
          <View style={{}}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>Messages</Text>
          </View>
          <View style={{ width: 24, width: 24 }}></View>
        </View>
      </View>
{/* Header */}

{/* Body */}
    <ScrollView>
    {
          requester.map((i) => {
            return (
              <View style={{backgroundColor:'white',padding:15}} key={i.key}>

                <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",}}>
                <Text style={{color:'black',fontSize:18,fontWeight:'bold'}}>{i.item}</Text>
                <TouchableOpacity style={{height:35,width:35,alignItems:"center",justifyContent:'center'}}>
                  <Text style={{fontSize:30,color:'#F44545'}}>this</Text></TouchableOpacity>
                </View>

                <View style={{flexDirection:"row",justifyContent:"space-between",}}>
                <TouchableOpacity><Text style={{color:'#A8A8A8',fontSize:14,}}>{i.text} </Text></TouchableOpacity>
                </View>

                <View style={{backgroundColor:'#D1D1D1',height:2,marginTop:10}}></View>
                
              </View>
            )
          })

        }

    </ScrollView>
    </View>
  )
}

export default Messages

const styles = StyleSheet.create({})