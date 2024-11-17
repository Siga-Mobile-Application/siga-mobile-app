import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default function StudentCard() {
    return (
        <View style={styles.container}>
            <View style={styles.leftSection}>
                <Image
                    source={require('../../assets/profile/header-student-card.png')}
                    style={styles.logo}
                    resizeMode="contain" />
            </View>
            <View style={styles.centerContent}>
                <View style={styles.photoPlaceholder} />
            </View>
            <View style={styles.rightSection} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: '25%',
        borderRadius: 7,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#fff',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    leftSection: {
        flexGrow: 1,
        alignContent: 'flex-start',
        backgroundColor: 'white',
    },
    centerContent: {
        flexGrow: 3,
        backgroundColor: '#e0e0e0',
        justifyContent: 'center',
    },
    rightSection: {
        flexGrow: 1,
        backgroundColor: '#990000',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
    },
    logo: {
        marginBottom: 8,
        width: '100%',
    },
    verticalText: {
        position: 'absolute',
        fontSize: 16,
        bottom: 50,
        right: 30,
        color: '#333',
        fontWeight: 'bold',
        textAlign: 'center',
        transform: [{ rotate: '-90deg' }],
    },
    headerText: {
        position: 'absolute',
        fontSize: 14,
        color: '#990000',
        fontWeight: 'bold',
        marginBottom: 4,
        transform: [{ rotate: '-90deg' }],
    },
    subText: {
        position: 'absolute',
        fontSize: 12,
        color: '#333',
        transform: [{ rotate: '-90deg' }],
    },
    photoPlaceholder: {
        width: '100%',
        height: 100,
        borderWidth: 1,
        borderColor: '#ccc',
    },
});
