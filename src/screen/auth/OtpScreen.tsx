// OTPScreen.js
import {CommonActions, useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {verifyOTP} from '../../services/apiService';
import {store, useAppSelector} from '../../store/store.ts';

const OTPScreen = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const otpInputRefs = useRef([]);

  const route = useRoute();
  const {otpId, otpFor} = route.params;

  const navigation = useNavigation();

  const dispatch = useDispatch<typeof store.dispatch>();
  const {data, loading, error} = useAppSelector(state => state.verifyOTPReducer);

  useEffect(() => {
    if (data && data.code === 200) {
      //navigation.navigate('Dashboard');
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'Dashboard' }],
        })
      );
    }
  }, [data, navigation]);

  const handleOtpChange = (text, index) => {
    if (/^\d*$/.test(text)) {
      let newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);

      // Automatically focus on the next input field
      if (text && index < otpInputRefs.current.length - 1) {
        otpInputRefs.current[index + 1].focus();
      }
    }
  };

  const handleSubmit = (otpID: string, otp: string, otpFor: string) => {
    const otpValue = otp.join('');

    console.log('OTP_ID', otpId, 'OTP_FOR', otpFor);

    dispatch(verifyOTP({ otpID: otpId, otp: otpValue, otpFor }));

  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>
      <View style={styles.otpContainer}>
        {otp.map((_, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={text => handleOtpChange(text, index)}
            value={otp[index]}
            ref={ref => (otpInputRefs.current[index] = ref)}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    textAlign: 'center',
    fontSize: 20,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginRight: 10,
  },
  submitButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default OTPScreen;
