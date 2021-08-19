import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={{padding: 50}}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <TextInput 
          placeholder="Course Goal" 
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              padding: 5,
              width: 200,
            }}/>
        <Button title="add"/>
      </View>
      <View>

      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({});