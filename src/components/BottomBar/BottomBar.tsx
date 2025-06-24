import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const tabs = [
  { name: 'Home', icon: <Icon name="home" size={24} color="#000" />, screen: 'HomeScreen' },
  { name: 'Wishlist', icon: <Icon name="heart" size={24} color="#000" />, screen: 'WishlistScreen' },
  { name: 'Cart', icon: <Icon name="shopping-cart" size={24} color="#000" />, screen: 'CartScreen' },
  { name: 'Notifications', icon: <Icon name="bell" size={24} color="#000" />, screen: 'NotificationScreen' },
  { name: 'Profile', icon: <Icon name="user" size={24} color="#000" />, screen: 'ProfileScreen' },
];

export default function BottomBar() {
  return (
    <View style={styles.container}>
      <View style={styles.tabsContainer}>
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => console.log(`Navigate to ${tab.screen}`)}
            style={styles.tabButton}
          >
            <View style={styles.iconWrapper}>
              {tab.icon}
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
    position: 'absolute',
    bottom: 0,
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
