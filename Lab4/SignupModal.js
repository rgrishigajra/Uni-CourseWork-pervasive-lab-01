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
import { useDispatch } from 'react-redux';
import { logIn, logOut } from './actionsFile';
import { createStore } from 'redux';
import loggedReducer from './reducersFile'

let store = createStore(loggedReducer);
store.subscribe(()=>console.log(store.getState()))
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      data: {
        email: '',
        firstName: '',
        password: '',
        surname: '',
      },
    };
    this.setUser = this.setUser.bind(this);
    this.setModalVisible = this.setModalVisible.bind(this);
  }
  state = {};

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
    store.dispatch(logIn(this.state.data));
  };

  render() {
    const { modalVisible } = this.state;
    const signUp = (
      <View style={styles.signUpBox}>
        <View style={styles.modalView}>
          <Text style={styles.signUpText}>Email</Text>
          <TextInput
            style={styles.signUp}
            editable
            maxLength={40}
            onChangeText={(test) => {
              this.setUser('email', test);
            }}
          />
          <Text style={styles.signUpText}>First Name</Text>
          <TextInput
            style={styles.signUp}
            editable
            maxLength={40}
            onChangeText={(test) => {
              this.setUser('firstName', test);
            }}
          />
          <Text style={styles.signUpText}>Surname</Text>
          <TextInput
            style={styles.signUp}
            editable
            maxLength={40}
            onChangeText={(test) => {
              this.setUser('surname', test);
            }}
          />
          <Text style={styles.signUpText}>Password</Text>
          <TextInput
            style={styles.signUp}
            editable
            maxLength={40}
            onChangeText={(test) => {
              this.setUser('password', test);
            }}
            secureTextEntry
          />
          <TouchableHighlight
            style={{
              ...styles.openButton,
              backgroundColor: '#2196F3',
              marginTop: 10,
            }}
            onPress={() => {
              this.setModalVisible(!modalVisible);
            }}
          >
            <Text style={styles.textStyle}>Hide Modal</Text>
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

        <TouchableHighlight
          style={styles.openButton}
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text style={styles.textStyle}>Show Modal</Text>
        </TouchableHighlight>
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
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
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

export default App;
