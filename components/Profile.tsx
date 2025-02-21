import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { ThemeContext } from '../App'; // Import ThemeContext

const Profile: React.FC = () => {
  const theme = useContext(ThemeContext); // Access darkMode state
  const darkMode = theme?.isDarkMode || false; // Handle undefined case

  return (
    <View style={[styles.container, darkMode ? styles.darkContainer : styles.lightContainer]}>
      <Image style={[styles.image]} source={require('../images/profile.png')}></Image>
      <Text style={[styles.title, darkMode ? styles.darkText : styles.lightText]}>Tres Ynman N. Abanilla</Text>
      <Text style ={[styles.heading , darkMode ? styles.darkText : styles.lightText]}>uh as long as it's game development then i might be able to do any task you need me to</Text>
      <Text style ={[styles.heading2 , darkMode ? styles.darkText : styles.lightText]}>My Skills</Text>
      <Text style ={[styles.heading3 , darkMode ? styles.darkText : styles.lightText]}>Game Designer | Level Designer | UI/UX Design{"\n"}Concept Art | 2D Art | 3D Modeling | VFX{"\n"}Game Programming | Scripting</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      marginBottom: 20,
      paddingHorizontal: 16,
      padding: 50,
    },
    lightContainer: {
      backgroundColor: '#fff',
    },
    darkContainer: {
        backgroundColor: '#242424',
    },
    title: {
        fontSize: 30,
        fontWeight: 600,
        fontStyle: "italic",
        letterSpacing: 2,
    },
    heading: {
        fontSize: 18,
        fontWeight: 400,
        fontStyle: "italic",
        textAlign: "center",
        letterSpacing: 1,
    },
    heading2: {
        paddingTop: 20,
        fontSize: 20,
        fontWeight: 400,
    },
    heading3: {
        fontSize: 20,
        fontWeight: 300,
    },
    image: {
        width: 150,
        height: 150,
        marginBottom: 10,
        borderRadius: 15,
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

  export default Profile;