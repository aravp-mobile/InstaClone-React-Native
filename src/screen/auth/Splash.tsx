import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
          navigation.navigate('Login');
        }, 2000); // 3 seconds
      }, [navigation]);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image 
        source={require('../../assets/Instagram.png')}/>
    </View>
  )
}

export default Splash