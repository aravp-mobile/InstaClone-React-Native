import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { PermissionsAndroid, Platform } from 'react-native';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';


const ProfileDetails = () => {
  const [imageUri, setImageUri] = useState(
    require('../assets/data/lord_hanuman_dp.jpg'),
  );

  const handleImagePicker = async () => {
    const cameraPermission = await requestCameraPermission();
  
    if (cameraPermission === RESULTS.GRANTED) {
      Alert.alert(
        'Select Image',
        'Choose an option',
        [
          {
            text: 'Camera',
            onPress: () => launchCamera({ mediaType: 'photo' }, handleImageResponse),
          },
          {
            text: 'Gallery',
            onPress: () => launchImageLibrary({ mediaType: 'photo' }, handleImageResponse),
          },
          {
            text: 'Cancel',
            style: 'cancel',
          },
        ],
        { cancelable: true }
      );
    } else {
      Alert.alert('Permission denied', 'You need to grant camera permission to use this feature.');
    }
  };

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'App needs access to your camera.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      return granted;
    } catch (err) {
      console.warn(err);
      return RESULTS.DENIED;
    }
  };

  const handleImageResponse = response => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error:', response.error);
    } else if (response.assets && response.assets.length > 0) {
      const uri = response.assets[0].uri;
      setImageUri({uri});
    }
  };

  return (
    <View style={{paddingHorizontal: 15}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
            
        <View style={{position: 'relative'}}>
          <Image
            style={{width: 80, height: 80, borderRadius: 40}}
            source={imageUri}
          />
          <TouchableOpacity
            style={{position: 'absolute', bottom: 0, right: 0}}
            onPress={handleImagePicker}>
            <Image
              style={{width: 20, height: 20}}
              source={require('../assets/plus.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={{width: 75, alignItems: 'center'}}>
          <Text style={{fontSize: 24, fontWeight: '400', color: 'black'}}>
            4
          </Text>
          <Text style={{fontSize: 16, color: 'black'}}>Posts</Text>
        </View>
        <View style={{width: 75, alignItems: 'center'}}>
          <Text style={{fontSize: 24, fontWeight: '400', color: 'black'}}>
            1.2B
          </Text>
          <Text style={{fontSize: 16, color: 'black'}}>Followers</Text>
        </View>
        <View style={{width: 75, alignItems: 'center'}}>
          <Text style={{fontSize: 24, fontWeight: '400', color: 'black'}}>
            1
          </Text>
          <Text style={{fontSize: 16, color: 'black'}}>Following</Text>
        </View>
      </View>
      <Text
        style={{
          fontSize: 18,
          color: 'black',
          fontWeight: '500',
          marginTop: 10,
        }}>
        Jai Shree Ram
      </Text>
      <Text style={{color: 'black'}}>Jai Shree Ram</Text>
      <Text style={{color: 'black'}}>Jai Shree Ram</Text>
      <Text style={{color: 'black', fontSize: 16, fontWeight: '500'}}>
        See Translation
      </Text>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 15,
          justifyContent: 'space-between',
          marginHorizontal: 10,
        }}>
        <TouchableOpacity>
          <Text
            style={{
              backgroundColor: '#E1E1E1',
              width: 160,
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 5,
              textAlign: 'center',
              color: 'black',
            }}>
            Edit Profile
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              backgroundColor: '#E1E1E1',
              width: 160,
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 5,
              textAlign: 'center',
              color: 'black',
            }}>
            Share Profile
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileDetails;
