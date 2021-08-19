import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (enteredGoal) => {
    setCourseGoals(courseGoals => [...courseGoals, { key: 'goal' + Date.now(), value: enteredGoal }]);
    setIsAddMode(false);
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  }

  const deleteGoalHandler = (goalKey) => {
    setCourseGoals(courseGoals => courseGoals.filter(goal => goal.key !== goalKey));
  }

  return (
    <View style={styles.container}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} addGoalHandler={addGoalHandler} onCancel={cancelGoalAdditionHandler}/>
      <FlatList data={courseGoals} renderItem={itemData => (
        <GoalItem 
          id={itemData.item.key}
          value={itemData.item.value} 
          onDelete={deleteGoalHandler}
        />
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
