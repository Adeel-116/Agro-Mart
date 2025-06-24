import { View, StyleSheet, Image, Text, StatusBar} from 'react-native';
import React, {  } from 'react';
import colors from '../../constants/Colors';
import LinearGradient from 'react-native-linear-gradient';
import CustomButton from '../../components/CustomButton';
export function OnBoardScreen() {


    function handleClick() {
        console.log("Button Clicked");  
    }

  return (
    <View  style={styles.container}>
        <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
        {/* Container 1 */}
      <View style={styles.container1}>
        {/* Linear Gradient */}
        <LinearGradient
          colors={[
            'rgba(35, 170, 73, 0.3)',
            'transparent',
            'rgba(35, 170, 73, 0)',
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}
        />
        {/* Top Leaf */}
        <View style={styles.topLeafContainer}>
          <Image
            source={require('../../assets/images/topleaf.png')}
            style={styles.topLeafImage}
            resizeMode="contain"
          />
        </View>
        {/* Circle with Logo */}
        <View style={styles.circleContainer}>
          <View style={styles.circle}>
            <Image
              source={require('../../assets/images/logo.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
        </View>

        {/* Text or TagLine */}
        <View style={styles.textContainer}>
            <Text style={styles.tagLineStyle}>From Store To Your Door <Text style={{color: colors.primary}}> — </Text> Fast & Fresh.</Text>
        
            <Text style={styles.paraText}>The ultimate grocery delivery app for fresh and fast service, every day.</Text>
        </View>

        {/* Button  */}
        <CustomButton title={"Shop Now"} onPress={handleClick}  style={{ marginTop: 10, alignSelf: 'center', paddingHorizontal: 60,}}/>

      </View>

      {/* Container 2  */}
      <View style={styles.container2}>
        <View>
          <View style={styles.leafImage}>
            <Image
              source={require('../../assets/images/leafbottom.png')}
              style={{ width: 70, height: 70 }}
              resizeMode="contain"
            />
          </View>
        </View>
        <View style={styles.imageWrapper}>
          <Image
            source={require('../../assets/images/onBoard.jpg')}
            style={styles.onBoardImage}
            resizeMode="cover"
          />
        </View>
      </View>
    </View>
  );
}

export default OnBoardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  container1: {
    flex: 1 / 2,
  },
  container2: {
    position: 'relative',
    flex: 1 / 2,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  imageWrapper: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },

  onBoardImage: {
    width: '100%',
    height: '80%',
  },
  leafImage: {
    position: 'absolute',
    top: 0,
    left: 30,
    zIndex: 1,
  },

  circleContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 70,
    height: 70,
    borderRadius: '50%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  logo: {
    width: 70,
    height: 70,
  },
  topLeafContainer: {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingRight: 30,
    paddingVertical: 5,
  },
  topLeafImage: {
    width: 40,
    height: 40,
  },
  textContainer:{
    width: '100%',
    paddingHorizontal: 30,
  },
  tagLineStyle:{
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    paddingVertical: 10,
    lineHeight: 30,
  },
  paraText:{
    width: '90%',
    textAlign: 'center',
    fontSize: 16,
    paddingVertical: 10,
    lineHeight: 20,
    color: colors.textPrimary,
    justifyContent: 'center',
    alignSelf: 'center',
  }
});
