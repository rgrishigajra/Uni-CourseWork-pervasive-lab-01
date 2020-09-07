import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isExpanded: false, render: '' };
    this.handleMenuExpand = this.handleMenuExpand.bind(this);
  }

  handleMenuExpand() {
    this.setState((state) => ({
      isExpanded: !state.isExpanded,
    }));
  }
  handleRender(test) {
    this.setState((state) => ({
      render: test,
    }));
  }
  render() {
    const myMenu = (
      <View>
        <Icon
          style={styles.menuicon}
          name="menu"
          size={30}
          color="#0a0a0a"
          onPress={this.handleMenuExpand}
        />
        <View style={styles.navitem}>
          <Icon
            style={styles.menuicon}
            name="gif"
            size={30}
            color="#0a0a0a"
            onPress={() => this.handleRender('gif')}
          />
          <p>Gif</p>
        </View>
        <View style={styles.navitem}>
          <Icon
            style={styles.menuicon}
            name="face"
            size={30}
            color="#0a0a0a"
            onPress={() => this.handleRender('profile')}
          />
          <p>Profile</p>
        </View>
      </View>
    );
    const myIcon = (
      <Icon
        style={styles.menuicon}
        name="menu"
        size={30}
        color="#0a0a0a"
        onPress={this.handleMenuExpand}
      />
    );
    return (
      <View style={{alignItems:"center"}}>
        <View style={styles.container}>
          {!this.state.isExpanded ? myIcon : myMenu}
        </View>
        {this.state.render == 'gif' ? (
          <View>
            <br />
            <br />
            <br />
            <br />
            <br />
            <Image
              style={{ width: 200, height: 200, marginTop: '50px' }}
              source={{
                uri:
                  'https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif',
              }}
            />
          </View>
        ) : (
          <p>Click on the Menu logo and any option icon</p>
        )}
                {this.state.render == 'profile' ? (
          <View>
            <br />
            <br />
            <br />
            <br />
            <br />
            <Image
              style={{ width: 200, height: 200, marginTop: '50px' }}
              source={{
                uri:
                  'https://avatars3.githubusercontent.com/u/25266353?s=460&u=a0831cefc749c0981f0e16f45c6631e6462c2e01&v=4',
              }}
            />
          </View>
        ) : (
          <p>Click on the Menu logo and any option icon</p>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#ffae42',
    color: '#0a0a0a',
    // display: 'flex',
    // flexDirection: 'row',
    // alignItems: 'center',
    paddingLeft: '10px',
  },
  menuicon: {
    padding: '5px',
  },
  navitem: {
    display: 'flex',
    flexDirection: 'row',
  },
});
