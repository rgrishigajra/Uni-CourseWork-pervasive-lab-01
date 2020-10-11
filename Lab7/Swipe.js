import React, { Component } from 'react';
import { View, Text, Image, PanResponder } from 'react-native';
import { Card } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

class Swipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: '',
      swipedCats: 0,
    };
    this.swipeFun = this.swipeFun.bind(this);
  }
  swipeFun() {
    console.log('swipe fun');
    this.setState((state) => ({
      swipedCats: 1,
    }));
    return true;
  }

  render() {
    const recDrag = ({ moveX, moveY, dx, dy }) => {
      if (dx < -100) {
        this.setState({
          animation: 'fadeOutLeft',
        });
        return true;
      }
      if (dx > 100) {
        this.setState({
          animation: 'fadeInLeft',
        });
        this.swipeFun;
        return true;
      }
      return false;
    };
    const panRespon = PanResponder.create({
      onStartShouldSetPanResponder: (e, gestureState) => {
        return true;
      },
      onPanResponderEnd: (e, gestureState) => {
        console.log('pan resp end', gestureState);
        if (recDrag(gestureState)) {
          console.log('DETECTED');
          () => this.swipeFun();
        }
        // return true;
      },
    });
    return (
      <View>
        {/* <Text style={{ color: 'red' }}>
          SwipedCats: {this.state.swipedCats}
        </Text> */}
        {/* {this.props.cats.map((cat) => { */}
        <Animatable.View
          animation={this.state.animation}
          {...panRespon.panHandlers}
        >
          <Card titleStyle={{ fontSize: 14 }}>
            <View style={{ height: 200 }}>
              <Image
                style={{ width: 300, height: 200 }}
                source={{
                  uri: 'https://media.giphy.com/media/wkPgpQeAlCnXW/giphy.gif',
                }}
              />
            </View>
          </Card>
        </Animatable.View>
        {/* })} */}
      </View>
    );
  }
}

const styles = {
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
};

export default Swipe;
