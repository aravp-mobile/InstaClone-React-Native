import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  Switch,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useNavigation} from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const AccountPage = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState(new Date());
  const [address, setAddress] = useState('');
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [error, setError] = useState('');

  const validateName = text => {
    if (text.length < 3) {
      setError('Name must be atleast 3 characters long.');
    } else if (!/^[a-zA-Z\s]*$/.test(text)) {
      setError('Name can only contain letters and spaces.');
    } else {
      setError('');
    }
    setName(text);
  };


  const toggleSwitch = () =>
    setNotificationsEnabled(previousState => !previousState);

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || dob;
    setShowDatePicker(false);
    setDob(currentDate);
  };

  const navigation = useNavigation();

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <View style={{flexDirection: 'row', elevation: 5}}>
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
          Account
        </Text>
      </View>
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={validateName}
      />

      <Text style={styles.label}>Age</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
        maxLength={2}
      />

      <Text style={styles.label}>Gender</Text>
      <View
        style={{
          borderWidth: 1,
          borderRadius: 4,
          borderColor: '#ccc',
          height: 50,
        }}>
        <Picker
          selectedValue={gender}
          style={styles.picker}
          onValueChange={itemValue => setGender(itemValue)}>
          <Picker.Item label="Select gender" value="" />
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
          <Picker.Item label="Other" value="other" />
        </Picker>
      </View>
      <Text style={styles.label}>Date of Birth</Text>
      <Button title="Select Date" onPress={() => setShowDatePicker(true)} />
      <Text style={{marginTop: 10, fontSize: 20, color: 'black'}}>
        {dob.toDateString()}
      </Text>
      {showDatePicker && (
        <DateTimePicker
          value={dob}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}

      <Text style={styles.label}>Address</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your address"
        value={address}
        onChangeText={setAddress}
      />

      <View style={styles.switchContainer}>
        <Text style={styles.label}>Notifications</Text>
        <Switch onValueChange={toggleSwitch} value={notificationsEnabled} />
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  inputError: {
    borderColor: 'red'
  },
  picker: {
    height: 20,
    width: '100%',
    marginBottom: 20,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
});

export default AccountPage;
