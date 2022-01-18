import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        direction: 'column',
        justifyContent: 'space-between',
    },
    textInput: {
        margin: 10,
        backgroundColor: 'white',
    },
    button: {
        backgroundColor: '#ff4747',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        height: 60,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    }
});

export default Styles;
