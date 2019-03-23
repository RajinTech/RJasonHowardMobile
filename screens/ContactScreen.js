import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated
} from 'react-native';
export default class ContactScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  ComponentWillMount() {
    this.animatedValue = new Animated.Value(0);
  }
  componentDidMount() {
    Animated.loop(Animated.timing(this.animatedValue, {
      toValue :1,
      duration: 100000
    }).start())
  }

  render() {
    this.animatedValue = new Animated.Value(0);
    const interpolateRotation = this.animatedValue.interpolate({
      inputRange: [0,1],
      outputRange: ['0deg', '3600deg']
    })
    const animatedStyle = {
      transform: [
        {rotate: interpolateRotation}
      ]
    }
    return(
    <View style={styles.container}>
        <Image source={require('../assets/JasonImages/images/contact.png')} style={styles.contactBanner}></Image>
      <Text style={styles.getStartedText}>R. Jason Howard</Text>
      <Text style={styles.getStartedText}>646 W. Genesee St</Text>
      <Text style={styles.getStartedText}>Skaneateles, NY 13152</Text>
      <Text style={styles.getStartedText}>(315)-560-6110</Text>
    <Text style={styles.getStartedText}>rjasonhoward@hotmail.com</Text>
  <Animated.Image source={require('../assets/JasonImages/images/cicada_inverse_logo.png')} style={[styles.cicadaLogo, animatedStyle]}></Animated.Image>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },

  contactBanner: {
    width: 100,
    height: 20,
    marginTop: 30,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  cicadaLogo: {
    width: 320,
    height: 320,
    borderRadius: 160,
    borderWidth: 30,
  },
})
