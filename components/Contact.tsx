import React, { useContext } from 'react';
import { View, TouchableOpacity, Linking, StyleSheet } from "react-native";
import { ThemeContext } from '../App'; // Import ThemeContext
import Icon from "react-native-vector-icons/FontAwesome"; // Change icon pack if needed

const Contact: React.FC = () => {
  const theme = useContext(ThemeContext); // Access darkMode state
  const darkMode = theme?.isDarkMode || false; // Handle undefined case
  const socialLinks = {
    twitter: "https://twitter.com/draw_naru",
    bluesky: "https://bsky.app/profile/naru-king.bsky.social",
  };

  const openLink = (url: string) => {
    Linking.openURL(url).catch((err) => console.error("Error opening link", err));
  };

  return (
    <View style={[styles.container, darkMode ? styles.darkContainer : styles.lightContainer]}>
      <TouchableOpacity onPress={() => openLink(socialLinks.twitter)}>
        <Icon name="twitter" size={40} color="#1DA1F2" />
      </TouchableOpacity>


      <TouchableOpacity onPress={() => openLink(socialLinks.bluesky)}>
        <Icon name="cloud" size={40} color="#0095FF" />
        {/* Bluesky doesn't have a standard icon in FontAwesome */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20, // Adds spacing between items (React Native 0.71+)
  },
  lightContainer: {
    backgroundColor: '#fff',
  },
  darkContainer: {
    backgroundColor: '#242424',
  },
  lightText: {
    color: '#000',
  },
  darkText: {
    color: '#fff',
  },
  lightLink: {
    color: 'blue',
  },
  darkLink: {
    color: 'lightblue',
  },
});

export default Contact;