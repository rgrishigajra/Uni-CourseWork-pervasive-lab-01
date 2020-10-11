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
import SwipeViewer from './SwipeViewer';
import * as Permissions from 'expo-permissions';
import * as Notifications from 'expo-notifications';

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
  componentDidMount() {
    const hasNotificationPermission = async () => {
      try {
        const { status: existingStatus } = await Permissions.getAsync(
          Permissions.NOTIFICATIONS
        );
        let finalStatus = existingStatus;
        // If we don't already have permission, ask for it
        if (existingStatus !== 'granted') {
          const { status } = await Permissions.askAsync(
            Permissions.NOTIFICATIONS
          );
          finalStatus = status;
        }
        if (finalStatus === 'granted') return true;
        if (finalStatus !== 'granted') {
          Alert.alert(
            'Warning',
            'You will not receive reminders if you do not enable push notifications. If you would like to receive reminders, please enable push notifications for Fin in your settings.',
            [
              { text: 'Cancel' },
              // If they said no initially and want to change their mind,
              // we can automatically open our app in their settings
              // so there's less friction in turning notifications on
              {
                text: 'Enable Notifications',
                onPress: () =>
                  Platform.OS === 'ios'
                    ? Linking.openURL('app-settings:')
                    : Linking.openSettings(),
              },
            ]
          );
          return false;
        }
      } catch (error) {
        Alert.alert(
          'Error',
          'Something went wrong while check your notification permissions, please try again later.'
        );
        return false;
      }
    };
    hasNotificationPermission();
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
          <Text style={styles.menutext}>Gif</Text>
        </View>
        <View style={styles.navitem}>
          <Icon
            style={styles.menuicon}
            name="face"
            size={30}
            color="#0a0a0a"
            onPress={() => this.handleRender('profile')}
          />
          <Text style={styles.menutext}>Profile</Text>
        </View>
        <View style={styles.navitem}>
          <Icon
            style={styles.menuicon}
            name="input"
            size={30}
            color="#0a0a0a"
            onPress={() => this.handleRender('signup')}
          />
          <Text style={styles.menutext}>Sign up</Text>
        </View>
        <View style={styles.navitem}>
          <Icon
            style={styles.menuicon}
            name="info"
            size={30}
            color="#0a0a0a"
            onPress={() => this.handleRender('userinfo')}
          />
          <Text style={styles.menutext}>User Info</Text>
        </View>
        <View style={styles.navitem}>
          <Icon
            style={styles.menuicon}
            name="pets"
            size={30}
            color="#0a0a0a"
            onPress={() => this.handleRender('cats')}
          />
          <Text style={styles.menutext}>I am here for cats</Text>
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
        ) : this.state.render == 'cats' ? (
          <SwipeViewer />
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
    paddingTop: 40,
  },
  menuicon: {
    padding: 5,
  },
  navitem: {
    display: 'flex',
    flexDirection: 'row',
  },
  menutext: {
    lineHeight: 40,
  },
});
