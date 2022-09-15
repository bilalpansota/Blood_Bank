import { View, Text,Image } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import LinearGradient from 'react-native-linear-gradient';
const Sliders = ({navigation}) => {
  return (

    <Onboarding
    showNext={false}
    showSkip={false}
    onDone={()=>navigation.navigate('EnterNumber')}
  pages={[
    
    {
    
      backgroundColor: '#820000',
    
      image: <Image source={require('../images/1.png')} />,
      title:'',
      subtitle: 'Donate your blood and save a life.',
      
    },
    {
        title:'',
      backgroundColor: '#820000',
      image: <Image source={require('../images/2.png')} />,
      subtitle: 'To be a responsible donor, you must get a check-up.',
    },
    
    {
        title:'',
        backgroundColor: '#820000',
        image: <Image source={require('../images/3.png')} />,
        subtitle: 'Your blood type should be compatible with the receiver’s type.',
      }
  ]}
/>

  )
}

export default Sliders