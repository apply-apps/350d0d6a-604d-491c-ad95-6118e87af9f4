// Filename: index.js
// Combined code from all files

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import * as Speech from 'expo-speech';

const alphabet = [
    { letter: 'A', word: 'Apple' },
    { letter: 'B', word: 'Ball' },
    { letter: 'C', word: 'Cat' },
    { letter: 'D', word: 'Dog' },
    { letter: 'E', word: 'Elephant' }
];

export default function App() {
    const [index, setIndex] = useState(0);
    const [showWord, setShowWord] = useState(false);

    const nextLetter = () => {
        if (index < alphabet.length - 1) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
        setShowWord(false);
    };

    const speakWord = () => {
        Speech.speak(alphabet[index].word);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.letter}>{alphabet[index].letter}</Text>
            {showWord && <Text style={styles.word}>{alphabet[index].word}</Text>}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => setShowWord(true)}>
                    <Text style={styles.buttonText}>Show Word</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={speakWord}>
                    <Text style={styles.buttonText}>Speak Word</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={nextLetter}>
                    <Text style={styles.buttonText}>Next Letter</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    letter: {
        fontSize: 100,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    word: {
        fontSize: 40,
        marginVertical: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 20,
    },
    button: {
        backgroundColor: '#2196F3',
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});