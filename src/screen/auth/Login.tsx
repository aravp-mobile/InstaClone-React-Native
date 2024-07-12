import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import CustomButton from '../../components/CustomButton.tsx';
import {Formik} from 'formik';
import {loginInitialValue, loginValidationSchema} from '../utils';
import InputBox from '../../components/Inputbox.tsx';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import {authLogin, authLoginWithOTP} from '../../services/apiService.ts';
import {store, useAppSelector} from '../../store/store.ts';
import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  Dashboard: undefined;
  Otp: {otpId: string; otpFor: string};
};

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Dashboard'
>;

const Login = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const dispatch = useDispatch<typeof store.dispatch>();

  const PasswordData = useAppSelector(state => state.authReducer);
  const OtpReducerData = useAppSelector(state => state.authReducerOTP);

  const handleLogin = (values: {mobileNumber: string; password: string}) => {
    dispatch(
      authLogin({mobile: values.mobileNumber, password: values.password}),
    );
  };

  const handleLoginWithOtp = (values: {mobileNumber: string}) => {
    dispatch(authLoginWithOTP({mobile: values.mobileNumber}));
  };

  useEffect(() => {
    console.log('Password Data', PasswordData.data);
    if (PasswordData.data && PasswordData.data.code === 200) {
      navigation.navigate('Dashboard');
    }
  }, [PasswordData, navigation]);

  useEffect(() => {
    console.log('LoginData', OtpReducerData.data);
    if (OtpReducerData.data && OtpReducerData.data.code === 200) {
      navigation.navigate('Otp', {
        otpId: OtpReducerData.data.data.id,
        otpFor: OtpReducerData.data.data.for,
      });
    }
  }, [OtpReducerData, navigation]);

  return (
    <View style={styles.mainContainer}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Image
          source={require('../../assets/instagram-logo.png')}
          style={styles.logoImage}
        />
        <Formik
          initialValues={loginInitialValue}
          onSubmit={handleLogin}
          validationSchema={loginValidationSchema}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            touched,
            errors,
            isValid,
          }) => {
            return (
              <View>
                <InputBox
                  placeholder={'Email or Mobile Number'}
                  onChangeText={handleChange('mobileNumber')}
                  onBlur={handleBlur('mobileNumber')}
                  value={values.mobileNumber}
                  touched={touched.mobileNumber}
                  errors={errors.mobileNumber}
                  keyboardType={'numeric'}
                  maxLength={10}
                />
                <InputBox
                  placeholder={'Password'}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  touched={touched.password}
                  errors={errors.password}
                  secureTextEntry
                />
                <CustomButton
                  buttonTitle={'Login'}
                  onPress={handleSubmit}
                  disabled={!isValid}
                />
                <TouchableOpacity
                  style={{marginTop: 20, alignSelf: 'center'}}
                  onPress={() => handleLoginWithOtp(values)}
                  disabled={!values.mobileNumber || !!errors.mobileNumber}>
                  <Text
                    style={{
                      fontSize: 16,
                      color:
                        !values.mobileNumber || !!errors.mobileNumber
                          ? 'gray'
                          : 'blue',
                    }}>
                    Login with OTP
                  </Text>
                </TouchableOpacity>
              </View>
            );
          }}
        </Formik>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logoImage: {
    marginBottom: 50,
    alignSelf: 'center',
    width: 350,
    height: 100,
  },
});
