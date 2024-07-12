import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const HomeHeader = () => {
  return (
    <View
      style={{
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 40,
        marginTop: 10,
      }}>
      <View style={{marginTop: 20}}>
        <Image
          style={{height: 40, width: 150, overflow:'hidden'}}
          source={require('../assets/Instagram.png')}
          resizeMode='contain'
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={{margin: 15}}>
          <Image
            style={{width: 25, height: 24}}
            source={require('../assets/heart.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{margin: 15}}>
          <Image
            style={{width: 25, height: 25}}
            source={require('../assets/send.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHeader;
