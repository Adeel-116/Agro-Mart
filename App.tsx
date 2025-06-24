import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import OnBoardScreen from './src/screen/onBoardScreen/OnBoardScreen';
function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <OnBoardScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

