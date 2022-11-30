import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export function Header() {

    return(
        <View style={styles.container}>
            <StatusBar style="light" />
            <Text style={styles.title}>globoplay</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000'
    },
    title: {
        marginTop: 32,
        marginBottom: 40,
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 24
    }
});