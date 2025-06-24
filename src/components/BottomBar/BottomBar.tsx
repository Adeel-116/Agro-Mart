import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../constants/Colors';

const tabs = [
  { name: 'Home', icon: 'home', screen: 'HomeScreen' },
  { name: 'Wishlist', icon: 'heart', screen: 'WishlistScreen' },
  { name: 'Cart', icon: 'shopping-cart', screen: 'CartScreen' },
  { name: 'Notifications', icon: 'bell', screen: 'NotificationScreen' },
  { name: 'Profile', icon: 'user', screen: 'ProfileScreen' },
];

export default function BottomBar() {
  return (
    <SafeAreaView edges={['bottom']} style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.tabsContainer}>
          {tabs.map((tab, index) => (
            // const isActive = route.name === tab.screen;
            <TouchableOpacity
              key={index}
              onPress={() => console.log(`Navigate to ${tab.screen}`)}
              style={styles.tabButton}
            >
              <View style={styles.iconWrapper}>
                 <Icon
                 name={tab.icon}
                 size={24}
                 color={'#555'}
            />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    width: '100%',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
  },
  container: {
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: colors.primary,
    paddingHorizontal: 5,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tabButton: {
    alignItems: 'center',
  },
  iconWrapper: {
    padding: 6,
  },
});
