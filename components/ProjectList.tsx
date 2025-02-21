import React, { useContext, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { ThemeContext } from '../App'; // Import ThemeContext

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
}

const ProjectList: React.FC = () => {
  const { isDarkMode } = useContext(ThemeContext); // Get darkMode state
  const [portfolioItems] = useState<PortfolioItem[]>([
    { id: 1, title: 'Re:Kindling', description: 'A Dark Fantasy Open-World Action RPG currently solo developed and handled by myself.' },
    { id: 2, title: 'Dead Elevator', description: 'A 2D visual novel investigation game developed in Construct as a final group project.' },
    { id: 3, title: 'Overflow', description: 'A platformer level-based game where you escape floods within a set time constraint.' },
    { id: 4, title: 'MINIMAL BIRD', description: 'A game recreation of "Flappy Bird" with a minimalistic aesthetic developed in Unity.' },
  ])

  const renderItem = ({ item }: { item: PortfolioItem }) => (
    <View style={[styles.item, isDarkMode && styles.darkItem]}>
      <Text style={[styles.title, isDarkMode && styles.darkText]}>{item.title}</Text>
      <Text style={[styles.description, isDarkMode && styles.darkText]}>{item.description}</Text>
    </View>
  );

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <FlatList
        data={portfolioItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    margin: 10,
    backgroundColor: '#fff',
  },
  darkContainer: {
    backgroundColor: '#242424',
  },
  item: {
    padding: 10,
    marginBottom: 10,
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
  },
  darkItem: {
    backgroundColor: '#333', // Darker item background for dark mode
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 4,
  },
  darkText: {
    color: '#fff',
  },
});

export default ProjectList;