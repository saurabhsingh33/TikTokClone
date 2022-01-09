import {StyleSheet, Dimensions} from 'react-native';

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        height: Dimensions.get('window').height,
    },
    video: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    uiContainer: {
        height: Dimensions.get('window').height,
        justifyContent: 'flex-end',
    },
    bottomContainer: {
        paddingBottom: 30,
        paddingLeft: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    handle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#fff',
        marginBottom: 10,
    },
    description: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '300',
        marginBottom: 10,
    },
    songRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    songName: {
        color: '#fff',
        fontSize: 16,
        marginLeft: 5,
    },
    songImage: {
        width: 40,
        height: 40,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#4c4c4c',
    },
    // Right Container
    rightContainer: {
        alignSelf: 'flex-end',
        height: 300,
        justifyContent: 'space-between',
        marginRight: 5,
    },
    profilePicture: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'white',
    },
    profilePictureContainer: {

    },
    iconContainer: {
        alignSelf: 'center',
    },
    statsLabel: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        marginTop: 5,
    },
    
})

export default Styles;