import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

const GoalInput = props => {   
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (text) => {
        setEnteredGoal(text);
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                placeholder="Course Goal" 
                style={styles.input}
                onChangeText={goalInputHandler}
            />
            <Button title="add" onPress={props.addGoalHandler.bind(this, enteredGoal)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 5,
        width: 200,
        flex: 1,
      }
});

export default GoalInput;