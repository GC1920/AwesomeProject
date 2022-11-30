import { TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { CommonActions } from '@react-navigation/native';

import { AntDesign } from '@expo/vector-icons';

export function Arrow() {

    const navigation = useNavigation()

    function openScreen() {

        navigation.dispatch(CommonActions.goBack());

    }

    return(
        <TouchableOpacity onPress={openScreen} style={styles.icon}>
            <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    icon: {
        marginTop: 40,
        marginBottom: 20,
    }
});