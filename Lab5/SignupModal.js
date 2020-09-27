import React, { Component } from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TextInput,
} from 'react-native';
import { connect } from 'react-redux';
import { logIn, logOut } from './redux/actionsFile';
import { getUserData } from './redux/selectors';
class signupApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      data: this.props.userData,
    };
    this.setUser = this.setUser.bind(this);
    this.setModalVisible = this.setModalVisible.bind(this);
    // this.logOutCaller = this.logOutCaller.bind(this);
  }
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };

  setUser = (field, val) => {
    this.setState((prevState) => ({
      data: {
        ...prevState.data,
        [field]: val,
      },
    }));
    this.props.logIn(this.state.data);
  };
  // logOutCaller =() =>{
  //   Alert.alert(
  //    'Delete Details',
  //    'Are you sure you wish to delete the
  //   details?'
  //    [
  //    { text: 'Cancel', onPress: () =>
  //   console.log('Not Deleted'),style: ' cancel'},
  //    {text: 'OK',onPress: () =>
  //   this.props.deleteDetails (id)}
  //    ],
  //   { cancelable: false }
  //    );
  //    }
  render() {
    const name = this.props.userData.firstName;
    console.log(this.state.data, this.props.userData);
    const { modalVisible } = this.state;
    const signUp = (
      <View style={styles.signUpBox}>
        <View style={styles.modalView}>
          <Text style={styles.signUpText}>Email</Text>
          <TextInput
            style={styles.signUp}
            editable
            maxLength={40}
            defaultValue={this.state.data.email}
            onChangeText={(test) => {
              this.setUser('email', test);
            }}
          />
          <Text style={styles.signUpText}>First Name</Text>
          <TextInput
            style={styles.signUp}
            editable
            maxLength={40}
            defaultValue={this.state.data.firstName}
            onChangeText={(test) => {
              this.setUser('firstName', test);
            }}
          />
          <Text style={styles.signUpText}>Surname</Text>
          <TextInput
            style={styles.signUp}
            editable
            maxLength={40}
            defaultValue={this.state.data.surname}
            onChangeText={(test) => {
              this.setUser('surname', test);
            }}
          />
          <Text style={styles.signUpText}>Password</Text>
          <TextInput
            style={styles.signUp}
            editable
            maxLength={40}
            defaultValue={this.state.data.password}
            onChangeText={(test) => {
              this.setUser('password', test);
            }}
            secureTextEntry
          />
          <TouchableHighlight
            style={{
              ...styles.openButton,
              backgroundColor: '#ffae42',
              marginTop: 10,
            }}
            onPress={() => {
              this.setModalVisible(!modalVisible);
            }}
          >
            <Text style={{ ...styles.textStyle, color: '#0a0a0a' }}>
              Hide Modal
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}
        >
          <View style={styles.centeredView}>{signUp}</View>
        </Modal>

        <View style={styles.openButton}>
          <Text
            style={styles.textStyle}
            onPress={() => {
              this.setModalVisible(true);
            }}
          >
            Show Modal
          </Text>
        </View>
        <View style={styles.openButton}>
          <Text
            style={styles.textStyle}
            onPress={() => {
              this.props.logOut();
              Alert.alert('Deleted Details');
              this.forceUpdate();
            }}
          >
            {' '}
            logOut {name}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#0a0a0a',
    color: '#ffae42',
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    marginTop: 30,
    height: 40,
  },
  textStyle: {
    color: '#ffae42',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
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

const mapStateToProps = (state) => {
  const userData = getUserData(state);
  return { userData };
};
const mapDispatchToProps = { logIn, logOut };

export default connect(mapStateToProps, mapDispatchToProps)(signupApp);
