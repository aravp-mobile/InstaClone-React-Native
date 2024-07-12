import {View, Text, Dimensions, Image} from 'react-native';
import React from 'react';
import {NotificationData} from '../../utils/NotificationData';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Notification = () => {
  const navigation = useNavigation()
  return (
    <View style={{marginTop: 2}}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
            style={{width: 30, height: 30, margin: 10}}
            source={require('../../assets/back.png')}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '800',
            color: 'black',
            padding: 10,
          }}>
          Notifications
        </Text>
      </View>
      {NotificationData.map(item => {
        return (
          <View key={item.id} style={{marginTop: 10}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
                marginBottom: 8,
                height: 60,
                backgroundColor: '#F0ECEB',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  style={{height: 40, width: 40, borderRadius: 20}}
                  source={item.image}
                />
                <View style={{flex: 1}}>
                  <Text
                    style={{
                      paddingLeft: 10,
                      fontSize: 15,
                      fontWeight: '600',
                      color: 'black',
                    }}>
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      paddingLeft: 10,
                      fontSize: 14,
                      fontWeight: '400',
                      color: 'black',
                    }}>
                    {item.desc}
                  </Text>
                </View>

                <TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '500',
                      paddingTop: 8,
                      paddingBottom: 8,
                      paddingStart: 20,
                      paddingEnd: 20,
                      backgroundColor: '#2D80EA',
                      borderRadius: 5,
                      color: 'white',
                    }}>
                    {item.buttonText}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Notification;
