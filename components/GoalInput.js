import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Modal} from 'react-native';

const GoalInput = props => {   
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (text) => {
        setEnteredGoal(text);
    };

    const addGoalHandler = () => {
        props.addGoalHandler(enteredGoal)
        setEnteredGoal('');
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder="Course Goal" 
                    style={styles.input}
                    onChangeText={goalInputHandler}
                />
                <Button title="ADD" onPress={addGoalHandler}/>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    input: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 5,
        width: 300,
        marginBottom: 10,
      }
});

export default GoalInput;