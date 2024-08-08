import React, { useState } from 'react';
import { Button, StyleSheet, View, Modal, TextInput } from 'react-native';

const GoalInput = () => {
    const [modalVisible, setModalVisible] = React.useState(false);
    const [enteredText, setEnteredText] = useState('');

    function goalInputHandler(enteredText) {
        console.log('enteredText', enteredText);
        setEnteredText(enteredText);
    }

    const startAddGoalHandler = () => {
        setModalVisible(!modalVisible);
    }

    function addGoalHandler() {
        if (enteredText.length > 0) {
            setCourseGoals(currentGoals => [...currentGoals, enteredText]);
            setEnteredText('');
        }
    }

    return (
        <View style={styles.wrapper}>
            <TextInput
                style={styles.textInput}
                placeholder='Your course goal'
                value={enteredText}
                onChangeText={goalInputHandler}
                onFocus={() => console.log('test')}
            />
            <Button title='Add New Goal' color={'#5e0acc'} onPress={addGoalHandler} />
            <View>
                <Button title='Open Modal' color={'#5e0acc'} onPress={startAddGoalHandler} />
            </View>
        </View>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 20
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        padding: 10,
        marginRight: 10,
        borderRadius: 5
    },
});
