import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (enteredGoal) => {
    setCourseGoals(courseGoals => [...courseGoals, { key: 'goal' + Date.now(), value: enteredGoal }]);
  };

  return (
    <View style={styles.container}>
      <GoalInput addGoalHandler={addGoalHandler} />
      <FlatList data={courseGoals} renderItem={itemData => (
        <GoalItem value={itemData.item.value} onDelete={() => console.log('Touch')}/>
      )}/>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
});
