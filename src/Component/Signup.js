import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import firestore from '@react-native-firebase/firestore';
const SignUp = () => {

  const [name, updateName] = useState("")
  const [phoneNumber, updatePhone] = useState("")
  const [age, updateAge] = useState("")
  const [healthCond, updateHealthCond] = useState("")
  const [bloodGroup, updateGroup] = useState("")


  const signUp = useCallback(() => {
    if (name && phoneNumber && age && bloodGroup) {
      firestore()
        .collection('Users')
        // Filter results
        .where('phoneNumber', '==', phoneNumber)
        .get()
        .then(querySnapshot => {
          if (!querySnapshot.size) {
            firestore()
              .collection('Users')
              .add({
                name,
                age,
                healthCond,
                bloodGroup,
                phoneNumber
              })
              .then(() => {
                console.log('User added!');
              }).catch((err) => { console.log(err) })
          } else {
            alert("Already exist")
          }
        });

    } else {
      alert("Please fill all required fields marked with *")
    }

  }, [name, age, healthCond, phoneNumber, bloodGroup])

  return (
    <LinearGradient style={{ flex: 1, position: 'relative' }} colors={['#FA4848', '#820000']}>

      <View>

        <Image style={{ alignItems: 'flex-end', marginLeft: 235 }} source={require('../images/5.png')}></Image>

      </View>


      <View style={{ padding: 20, margin: 15, justifyContent: 'space-between' }} >
        <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white' }}>
          SignUp
        </Text>

        <Text style={{ fontSize: 15, color: 'white' }}>
          Enter Full Name *
        </Text>
        <TextInput onChangeText={(value) => {
          updateName(value)
        }} value={name} style={{ borderBottomColor: 'white', borderWidth: 0.3, borderRadius: 30, padding: 12 }} />
        <Text style={{ fontSize: 15, color: 'white' }}>
          Phone Number *
        </Text>
        <TextInput onChangeText={(value) => {
          updatePhone(value)
        }} value={phoneNumber} style={{ borderBottomColor: 'white', borderWidth: 0.3, borderRadius: 30, padding: 12 }} />
        <Text style={{ fontSize: 15, color: 'white' }}>
          Date of Birth
        </Text>
        <TextInput style={{ borderBottomColor: 'white', borderWidth: 0.3, borderRadius: 30, padding: 12 }} />

        <Text style={{ fontSize: 15, color: 'white' }}>
          Age *
        </Text>
        <TextInput onChangeText={(value) => {
          updateAge(value)
        }} value={age} style={{ borderBottomColor: 'white', borderWidth: 0.3, borderRadius: 30, padding: 12 }} />

        <Text style={{ fontSize: 15, color: 'white' }}>
          Prevailing Health Conditions
        </Text>
        <TextInput onChangeText={(value) => {
          updateHealthCond(value)
        }} value={healthCond} style={{ borderBottomColor: 'white', borderWidth: 0.3, borderRadius: 30, padding: 12 }} />

        <Text style={{ fontSize: 15, color: 'white' }}>
          Blood Group *
        </Text>
        <TextInput onChangeText={(value) => {
          updateGroup(value)
        }} value={bloodGroup} style={{ borderBottomColor: 'white', borderWidth: 0.3, borderRadius: 30, padding: 12 }} />

      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
        <TouchableOpacity onPress={() => {
          signUp()
        }} style={{ borderRadius: 15, borderWidth: 0.1, width: 200, height: 50, backgroundColor: '#fff', justifyContent: 'center' }}><Text style={{ textAlign: 'center', color: '#820000', elevation: 100 }}>Register For Checkup</Text></TouchableOpacity>
      </View>
    </LinearGradient>
  )
}

export default SignUp