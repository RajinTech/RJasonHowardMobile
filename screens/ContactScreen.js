import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
export default class ContactScreen extends React.Component {
  static navigationOptions = {
    title: 'Contact',
  };

  render() {
    return(
    <View style={styles.container}>
        <Image source={require('../assets/JasonImages/images/contact.png')} style={styles.bottomBanner}></Image>
      <Text style={styles.getStartedText}>R. Jason Howard</Text>
      <Text style={styles.getStartedText}>646 W. Genesee St</Text>
      <Text style={styles.getStartedText}>Skaneateles, NY 13152</Text>
      <Text style={styles.getStartedText}>(315)-560-6110</Text>
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
  bottomBanner: {
    width: 100,
    height: 20,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
})
