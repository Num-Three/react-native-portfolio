import React, { createContext, useState } from 'react';
import { StyleSheet, Switch, SafeAreaView } from 'react-native';
import Profile from './components/Profile';
import Contact from './components/Contact';
import ProjectList from './components/ProjectList';

interface ThemeContextType {  //Define type of ThemeContext (bool here)
  isDarkMode: boolean;
  setDarkMode: (mode: boolean) => void;
}

export const ThemeContext = createContext({ //creates the theme context and lets it be exported out of App.tsx to other components
  isDarkMode: false,
  setDarkMode: (mode: boolean) => { },
});

export default function App() {
  const [isDarkMode, setDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setDarkMode }}>
      <SafeAreaView style={[styles.container, isDarkMode ? styles.darkContainer : styles.lightContainer]}>
        <Profile/>
        <Contact/>
        <ProjectList/>
        <Switch 
            value={isDarkMode} 
            onValueChange={() => setDarkMode(!isDarkMode)} 
            thumbColor={isDarkMode ? "#fff" : "#121212"} 
            trackColor={{ false: "#767577", true: "#9b9b9b" }} 
          />
      </SafeAreaView>
    </ThemeContext.Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    paddingTop: 15,
  },
  lightContainer: {
    backgroundColor: '#fff',
  },
  darkContainer: {
    backgroundColor: '#242424',
  },
});
