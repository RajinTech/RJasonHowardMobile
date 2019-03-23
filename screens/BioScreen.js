import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image } from 'react-native';
export default class BioScreen extends React.Component {
  static navigationOptions = {
    header: null,

  };

  render() {
    return (
      <ScrollView style={styles.container}>
          <View style={styles.bioContainer}>
            <Text style={styles.bioHeaders}>History</Text>
            <ScrollView style={styles.bioScroller} contentContainerStyle={styles.contentContainer}>
              <Text style={styles.bioText}>
                R Jason Howard is a progressive glass artist who specializes in borosilicate flameworking. He lives in Skaneateles, NY with his wife and children, blowing glass full time and running his production studio, Cicada Glassworks. His current work draws on a unique combination of traditional Italian techniques and self-invented processes to create large, organic, colorful forms that push the boundaries of what flameworked glass can do. Jason first began working with glass in 1997 as a senior studying ceramics at Hamilton College, with glass artist, Robert Palusky. After a two year internship as Hamilton’s ceramic studio technician, and a scholarship to the Studio of the Corning Museum of Glass, he began studying both off-hand glassblowing and flameworking, with renowned artists such as Cesare Toffolo, Emilio Santini, William Gudenrath, Robert Mickelsen, James Nowak, Suellen Fowler, and Loren Stump. Jason has also worked as a technical and artistic consultant for Northstar Glassworks, developing and reformulating colored borosilicate glasses, including the popular color “Onyx.” He is well known in the glassblowing community for custom tuning German torches, and now has a “J Howard Pro Model” available from the Herbert Arnold company. He demonstrates at conferences, and teaches workshops and classes, most recently in Tokyo and Kyoto Japan. Jason’s work is exhibited internationally in museums and galleries such as Snyderman-Works in Philadelphia, the Museum of Art and Design in NYC, the Museum of Glass in Tacoma Washington, Kittrell-Riffkind Artglass in Dallas, and Pismo Gallery in Denver. His work is also featured in the permanent collections of the Philadelphia Museum of Art, The Cafesjian Center for the Arts, in Yerevan Armenia. He has been nominated for the NICHE awards several times, and won it in 2009.
              </Text>
            </ScrollView>

            <Text style={styles.bioHeaders}>Artist Statement</Text>
            <ScrollView style={styles.bioScroller}>
                <Text style={styles.bioText}>"My current work is an exploration of change, time, and process. I’ve always thought of glass as a matrix of the space-time-heat continuum. Its form is a record of a series of events that happened to it along its formation, like strata within the earth’s crust. The invisible strata within the glass all move as one, but at different rates depending on location and temperature. Sometimes they flow quickly, sometimes slowly, but always together like an orchestra following the conductor with heat as the tempo. I draw inspiration from the natural world, and try to capture the universal flow that binds everything. Using traditional Italian techniques, modern developments in flameworked borosilicate glass, and a mix of my own invented techniques, I’m trying to draw from and acknowledge the past, represent the present, and bridge the future in the flow of change."</Text>
            </ScrollView>
            <Text style={styles.bioHeaders}>Current Series</Text>
            <ScrollView style={styles.bioScroller} contentContainerStyle={styles.contentContainer}>
              <Text style={styles.bioText}>
                My current work and series, "Soul Cages: An exploration of change, time, and process” is about inner life forces. The simple bubble is the genesis of all blown forms, perhaps even the soul of glass. I prefer blown glass forms because they capture a unique part of the hand made artistic process - the human breath. In this series, I've tried to "let go", allowing the bubbles to expand as large as they can without too much control over their shape as they inflate in one breath. Piercing the bubbles with a flame leaves only their pure essence: These captured forms are reduced to their absolute basic structure or inner life force. They are not stitched or woven; but rather blown, manipulated, and finally revealed. Layers of fumed gold and silver amplify their ability to capture, hold, and reflect light’s divine mystic qualities.

              </Text>
            </ScrollView>
            <Text style={styles.bioHeaders}>The Art and Process of Flameworked Borosilicate Glass</Text>
          <Text style={[styles.bioHeaders, {fontSize: 12},]}>by R Jason Howard</Text>
            <ScrollView style={styles.bioScroller} contentContainerStyle={styles.contentContainer}>
              <Text style={styles.bioText}>
                The style of glassblowing that I use to create my work is called Flameworking. Flameworking (also known as Lampworking) uses a large and very hot torch powered by oxygen and propane to melt borosilicate glass, also known as “hard glass,” or Corning’s famous brand name “Pyrex”. Borosilicate glass was invented around the turn of the 20th Century for use in laboratories because of its unique properties. It is different than soda-lime glass (soft glass), because it is chemically non-reactive, lighter, stronger, and most importantly, resistant to thermal shock. This crack resistant property of borosilicate makes it ideal for working directly in the flame where temperature changes are extreme. It’s also ideal for complex projects with many parts where multiple reheating cycles are needed. Not only is the glass resistant to thermal shock, but it also handles cooling down well. This allows me to slow down, and be very form conscious and detail oriented, rather than race against the clock of cooling. While boorosilicate glass has its advantages, it also has its disadvantages. It is more viscous during its molten state because of a high concentration of silica (about 85% vs. about 65% for soft glass). While being optically very clear, this high concentration of silica creates a glass that is very hard to melt. On a relatively small torch, large thick masses of molten glass are difficult to obtain, so smaller or thinner glass is blown instead The process of flameworking is also a little different than off-hand glassblowing. In flameworking, instead of dipping into a tank of molten glass, you start by reheating pre-made glass tubes and rods. In other words, you’re approaching the process from the opposite direction, starting from cold and working towards molten..This is why soft glass is usually thicker and heavier; the thickness holds the heat you need to form its shape. Flameworked glass is thinner and smaller by nature because you’re not starting with a thick mass of molten glass. This different approach begins a conversation with the material that is in a different language but with a similar vocabulary. In flameworking, there is a sense of building or welding something together, whether that’s out of multiple small parts, or in layers to gain size. In off hand glassblowing, it’s more of a sense of balancing flow vs. gravity in a race against time. Flameworked borosilicate glass is also a relatively new form of glassblowing. The glass itself has only been around for a little over a hundred years, and until recently, was exclusively used for scientific lab ware.	While there were some early pioneers during the studio glass movement in the 1960’s, very little was done with borosilicate as a medium until the 1990’s when the first commercially made colored glass became available and sparked true interest. I personally find borosilicate glass interesting because so little has been done with it yet. It’s as if we get to explore and define the boundaries of our own studio glass movement. It is an exciting time for borosilicate glass artists to explore the different possibilities, because the field is wide open, the surface only scratched, and finally, the technologies and equipment to do it are now available.
              </Text>
            </ScrollView>
          </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: 'black',
  },
  bioScroller: {
    height: 300,
    marginBottom: 20,
    backgroundColor: 'darkslateblue',
    borderRadius: 20,
    borderWidth:3,
    borderColor: '#8692DF',
  },
  bioScroller2: {
    height: 300,
    marginBottom: 20,
    backgroundColor: 'beige',
    borderRadius: 20,
    borderWidth:3,
    borderColor: '#ABA559',
  },
  bioContainer: {
    alignItems: 'center',
    marginHorizontal: 30,
  },
    bioText: {
    fontSize: 17,
    color: 'beige',
    lineHeight: 24,
    textAlign: 'center',
    margin: 10,
    marginBottom: 20,
    fontFamily: 'Papyrus',
  },
  bioHeaders: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Zapfino',
  },
});
