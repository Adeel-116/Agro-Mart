import { View, StyleSheet, Image } from 'react-native';
import colors from '../../constants/Colors';
export function SplashScreen1() {
  return (
    <View style={styles.container}>
      

        <View style={styles.circleContainer}>
            <View style={styles.circle}>

                <Image
                source={require('../../assets/images/logo.png')} 
                style={styles.logo}
                resizeMode="contain"
      />
            </View>
        </View>


    </View>
  );
}

export default SplashScreen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleContainer:{
    width: '100%',
    justifyContent: 'center',
    paddingVertical: 20,
    alignItems: 'center',
  },
  circle:{
    width: 140,
    height: 140,
    borderRadius: '50%',
    backgroundColor: 'white', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 140,
    height: 140,
  },
  
});
