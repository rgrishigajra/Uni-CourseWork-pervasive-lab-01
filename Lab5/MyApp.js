import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Alert,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SignupModal from './SignupModal';
import UserDetails from './UserDetials';

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
          <Text>Gif</Text>
        </View>
        <View style={styles.navitem}>
          <Icon
            style={styles.menuicon}
            name="face"
            size={30}
            color="#0a0a0a"
            onPress={() => this.handleRender('profile')}
          />
          <Text>Profile</Text>
        </View>
        <View style={styles.navitem}>
          <Icon
            style={styles.menuicon}
            name="input"
            size={30}
            color="#0a0a0a"
            onPress={() => this.handleRender('signup')}
          />
          <Text>Sign up</Text>
        </View>
        <View style={styles.navitem}>
          <Icon
            style={styles.menuicon}
            name="info"
            size={30}
            color="#0a0a0a"
            onPress={() => this.handleRender('userinfo')}
          />
          <Text>User Info</Text>
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
    const homePage = (
      <View>
        {this.state.render == 'gif' ? (
          <View>
            <Image
              style={{ width: 200, height: 200, marginTop: 50 }}
              source={{
                uri:
                  'https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif',
              }}
            />
          </View>
        ) : (
          <Text>Click on the Menu logo and any option icon</Text>
        )}
        {this.state.render == 'profile' ? (
          <View>
            <Image
              style={{ width: 200, height: 200, marginTop: 50 }}
              source={{
                uri:
                  'https://avatars3.githubusercontent.com/u/25266353?s=460&u=a0831cefc749c0981f0e16f45c6631e6462c2e01&v=4',
              }}
            />
          </View>
        ) : (
          <Text>Click on the Menu logo and any option icon</Text>
        )}
      </View>
    );
    return (
      <View style={{ alignItems: 'center' }}>
        <View style={styles.container}>
          {!this.state.isExpanded ? myIcon : myMenu}
        </View>
        {this.state.render == 'signup' ? (
          <SignupModal />
        ) : this.state.render == 'userinfo' ? (
          <UserDetails />
        ) : (
          homePage
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
    paddingLeft: 10,
    paddingTop: 20,
  },
  menuicon: {
    padding: 5,
  },
  navitem: {
    display: 'flex',
    flexDirection: 'row',
  },
});
