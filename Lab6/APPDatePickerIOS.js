import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default class APPDatePickerIOS extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(1598051730000), mode: 'date', show: true };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event, selectedDate) {
    const currentDate = selectedDate || date;
    console.log(currentDate);
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={this.state.date}
            is24Hour={true}
            display="default"
            onChange={this.onChange}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    // width: '100%',
  },
});
