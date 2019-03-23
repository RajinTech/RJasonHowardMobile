import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import { ImageGallery } from '../components/ImageGallery';
import { FadeInView } from '../components/FadeInView';

import { MonoText } from '../components/StyledText';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

            <FadeInView>
            <ImageGallery/>
          </FadeInView>

          <View>
            <Image
              source={require('../assets/JasonImages/images/bottombanner_preview.png')} style={styles.bottomBanner}>
              </Image>
            <Text
              onPress={this._handleLearnMorePress}
              style={styles.helpLinkText}>
            Learn more
            </Text>
            <TouchableHighlight onPress={this._handleLearnMorePress}>
              <Image source={require('../assets/JasonImages/images/cicada_inverse_logo.png')} style={styles.cicadaLogo}></Image>
            </TouchableHighlight>
          </View>
        </ScrollView>

        <View style={styles.tabBarInfoContainer}>
          <Image source={require('../assets/JasonImages/images/JH_topbanner.png')} style={styles.banner}></Image>
        </View>
      </View>
    );
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('http://rjasonhoward.com/');
  };

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  banner: {
     width: 320,
     height: 30,
   },
  bottomBanner: {
    width: 300,
    height: 60,
    left: 10,
  },
  cicadaLogo: {
    width: 300,
    height: 60,
    left: 10,
  },
  contentContainer: {
    paddingTop: 30,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  tabBarInfoContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    height: 50,
    backgroundColor: 'white',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
});
