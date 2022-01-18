import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        direction: 'column',
        backgroundColor: 'black',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    button: {
        height: 50,
        width: 50,
        backgroundColor: '#ff4343',
        marginVertical: 10,
        alignSelf: 'center',
        borderRadius: 25,
    },
    buttonStartRecording: {
        height: 50,
        width: 50,
        backgroundColor: '#ff4343',
        marginVertical: 10,
        alignSelf: 'center',
        borderRadius: 25,
    },
    buttonStopRecording: {
        height: 40,
        width: 40,
        backgroundColor: '#ff4343',
        marginVertical: 10,
        alignSelf: 'center',
        borderRadius: 3,
    }
});

export default Styles;
