import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
// import {SignupValidationSchema, signupInitialValue} from './utils';
import {SignUpValidationSchema, signupInitialValue} from '../utils';

import {useNavigation} from '@react-navigation/native';

import InputBox from '../../components/Inputbox';
import CustomButton from '../../components/CustomButton';
import {AppColor} from '../../utils/AppColor';

const Signup = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 15,
        marginTop: 20,
        backgroundColor: 'white',
      }}>
      <View style={{flex: 0.3}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '700',
            marginBottom: 20,
            color: 'black',
          }}>
          Enter Mobile Number here !!!
        </Text>

        <View style={{flex: 1, alignItems: 'center'}}>
          <TextInput
            style={{
              borderWidth: 1,
              width: '100%',
              borderColor: 'grey',
              borderRadius: 5,
              paddingHorizontal: 10,
            }}
            placeholder={'Mobile Number'}
            keyboardType={'numeric'}
            maxLength={10}
          />
          <TouchableOpacity
            style={{
              marginTop: 15,
              backgroundColor: AppColor.BUTTON,
              padding: 10,
              borderRadius: 5,
            }}>
            <Text style={{fontSize: 16, color: 'white', textAlign: 'center'}}>
              Get OTP
            </Text>
          </TouchableOpacity>
        </View>

        {/* <TouchableOpacity style={{marginTop: 15}}>
          <Text style={{fontSize: 16, textAlign: 'center'}}>Sign up with email</Text>
        </TouchableOpacity> */}
      </View>
      <View style={{justifyContent: 'flex-end', flex: 0.7, marginBottom: 20}}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          hitSlop={{top: 30, bottom: 30, left: 30, right: 30}}>
          <Text style={{fontSize: 16, textAlign: 'center'}}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;
