import React from 'react';
import { Text, Image, StyleSheet, View } from 'react-native';

export class ImageGallery extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        picturesall: [
          <Image source={require('../assets/JasonImages/images/0637_2.png')} style={styles.imageStyle}></Image>,
          <Image source={require('../assets/JasonImages/images/1686.png')} style={styles.imageStyle}></Image>,
          <Image source={require('../assets/JasonImages/images/1859_RT8.png')} style={styles.imageStyle}></Image>,
          <Image source={require('../assets/JasonImages/images/bachelor_button.png')} style={styles.imageStyle}></Image>,
          <Image source={require('../assets/JasonImages/images/Dragonfly_Goblets.png')} style={styles.imageStyle}></Image>,
          <Image source={require('../assets/JasonImages/images/Frequency.png')} style={styles.imageStyle}></Image>,
          <Image source={require('../assets/JasonImages/images/Horns_of_Dilemma.png')} style={styles.imageStyle}></Image>,
          <Image source={require('../assets/JasonImages/images/Rusty.png')} style={styles.imageStyle}></Image>,
          <Image source={require('../assets/JasonImages/images/Trumpet_Vine_Cage_Cup.png')} style={styles.imageStyle}></Image>,
          <Image source={require('../assets/JasonImages/images/Wavelength.png')} style={styles.imageStyle}></Image>,
          <Image source={require('../assets/JasonImages/images/Wisteria.png')} style={styles.imageStyle}></Image>
          ]
      };

          this.roledexforward = this.roledexforward.bind(this)

          setInterval(() => this.roledexforward(), 3500);
    }


      roledexforward(state){
      let holder = this.state.picturesall
      let pergatory = holder.pop()
      holder.unshift(pergatory)
      this.setState({ picturesall: holder })
    }

  render() {

    return(


    <View>
{this.state.picturesall[0]}
</View>

  );
  }
}

const styles = StyleSheet.create({

  imageStyle: {
    width: 350,
    height: 495,
    borderRadius: 10,
  }

});
