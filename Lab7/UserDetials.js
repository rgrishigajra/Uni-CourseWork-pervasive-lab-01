import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, ScrollView, Picker } from 'react-native';
import APPDatePickerIOS from './APPDatePickerIOS';

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedValue: null };
    this.onChange = this.onChange.bind(this);
  }

  onChange(itemValue, itemIndex) {
    console.log(itemValue, itemIndex);
  }
  render() {
    return (
      <ScrollView style={styles.user} alignItems="center">
        <Text style={styles.signUpText}>Whats your Country</Text>
        <TextInput
          style={styles.signUp}
          editable
          maxLength={40}
          onChangeText={(test) => {
            console.log(test);
          }}
        />
        <Text>Enter Your Birth date</Text>
        <APPDatePickerIOS />
        <Text>Whats your gender</Text>
        <Picker
          selectedValue={this.selectedValue}
          style={{ height: 50, width: 150 }}
          onValueChange={this.onChange}
        >
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
          <Picker.Item label="Other" value="other" />
        </Picker>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  user: {
    marginTop: 100,
    width: '100%',
    flexDirection: 'column',
    height: '90%',
  },
  signUpText: {
    marginTop: 10,
  },
  // signUpBox: {
  //   width: 200,
  //   marginTop: 10,
  // },
  signUp: {
    width: 200,
    backgroundColor: '#ffae42',
    marginTop: 10,
  },
});

export default UserDetails;
