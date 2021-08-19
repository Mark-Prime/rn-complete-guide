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
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="CANCEL" color="red" onPress={props.onCancel} />
                    </View>
                    <View style={styles.button}>
                        <Button title="ADD" onPress={addGoalHandler}/>
                    </View>
                </View>
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
        width: '80%',
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%'
    },
    button: {
        width: '40%',
    }
});

export default GoalInput;