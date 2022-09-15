import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';
const Onetime = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View>
        <Image source={require('../images/shapes.png')}></Image>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text>OTP Verification</Text>
        <Text>Enter the OTP sent to your given number</Text>
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
          margin: 10,
        }}>
<OTPInputView
    style={{width: '80%', height: 150}}
    pinCount={4}
    // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
    // onCodeChanged = {code => { this.setState({code})}}
    autoFocusOnLoad
    editable={true}
    codeInputFieldStyle={styles.underlineStyleBase}
    codeInputHighlightStyle={styles.underlineStyleHighLighted}
    onCodeFilled = {(code => {
        console.log(`Code is ${code}, you are good to go!`)
    })}
></OTPInputView>
<TouchableOpacity
          style={{
            borderRadius: 15,
            borderWidth: 0.1,
            width: 180,
            height: 50,
            backgroundColor: '#820000',
            justifyContent: 'center',
          }}
          onPress={() => navigation.navigate('Signup')}>
          <Text style={{textAlign: 'center', color: 'white', fontSize:20}}>Verify</Text>
        </TouchableOpacity>  
      </View>
      
    </View>
  );
};
const styles = StyleSheet.create({
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: '#820000',
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: '#820000',
  },
});
export default Onetime;
