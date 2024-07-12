import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {AppColor} from '../utils/AppColor';

const CustomButton = ({buttonTitle, onPress, disabled}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <TouchableOpacity onPress={onPress} disabled={disabled}>
      <View
          style={[
            styles.buttonContainer,
            {
              backgroundColor: disabled
                ? AppColor.DISABLE_BUTTON
                : AppColor.BUTTON,
            },
          ]}>
          <Text style={styles.textStyle}>{buttonTitle}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
    buttonContainer: {
      width: 350,
      borderRadius: 5,
      
    },
    textStyle: {
      color: 'white',
      paddingVertical: 12,
      fontSize: 18,
      textAlign: 'center',
    },
  });
