import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Swipe from './Swipe';
cats = [
  { img: 'https://media.giphy.com/media/wkPgpQeAlCnXW/giphy.gif' },
  { img: 'https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif' },
  { img: 'https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif' },
  { img: 'https://media.giphy.com/media/lzz3B3xLZluuY/giphy.gif' },
];

export default class SwipeViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      swipedCats: 0,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.statusStyle}></View>
        <Swipe cats={cats} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  statusStyle: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
