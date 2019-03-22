import React from 'react';
import { ScrollView, StyleSheet, View, Text,  } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { MonoText } from '../components/StyledText';
export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        <ExpoLinksView />
          <View style={styles.tabBarInfoContainer}>
            <Text style={styles.tabBarInfoText}>This is a tab bar. You can edit it in:</Text>

            <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
              <MonoText style={styles.codeHighlightText}>navigation/MainTabNavigator.js</MonoText>
            </View>
          </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
