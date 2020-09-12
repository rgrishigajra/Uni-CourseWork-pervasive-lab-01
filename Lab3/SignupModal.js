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

class App extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
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
              console.log(test);
            }}
          />
          <Text style={styles.signUpText}>First Name</Text>
          <TextInput
            style={styles.signUp}
            editable
            maxLength={40}
            onChangeText={(test) => {
              console.log(test);
            }}
          />
          <Text style={styles.signUpText}>Surname</Text>
          <TextInput
            style={styles.signUp}
            editable
            maxLength={40}
            onChangeText={(test) => {
              console.log(test);
            }}
          />
          <Text style={styles.signUpText}>Password</Text>
          <TextInput
            style={styles.signUp}
            editable
            maxLength={40}
            onChangeText={(test) => {
              console.log(test);
            }}
            secureTextEntry
          />
          <TouchableHighlight
            style={{ ...styles.openButton, backgroundColor: '#2196F3',marginTop:10 }}
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
