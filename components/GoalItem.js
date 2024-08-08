import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const GoalItem = ({ goal, onDeleteItem }) => {
    return (
        <Pressable onPress={onDeleteItem} android_ripple={{ color: '#dddddd' }} style={({ pressed }) => pressed && styles.pressedItem}>
            <View style={styles.goalItem}>
                <Text style={styles.goalText}>{goal}</Text>
            </View>
        </Pressable>
    );
};

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        backgroundColor: '#5e0acc',
        padding: 10,
        marginVertical: 5,
        borderRadius: 10,
        width: '100%',
        borderWidth: 1,
        borderColor: '#cccccc',
    },
    goalText: {
        fontSize: 16,
        color: 'white',
    },
    pressedItem: {
        opacity: 0.5,
    },
});
