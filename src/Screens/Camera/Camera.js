import React, { useRef, useState }from 'react';
import { View, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Styles from './Styles';

const Camera = () => {

    const [isRecording, setIsRecording] = useState(false);

    const camera = useRef();
    const onRecordingClick = async () => {
        if (isRecording) {
            camera.current.stopRecording();
        } else {
            const data = await camera.current.recordAsync();
            console.log(data);
        }
    };

    return (
        <View style={Styles.container}>
            <RNCamera
                ref={camera}
                onRecordingStart={() => setIsRecording(true)}
                onRecordingEnd={() => setIsRecording(false)}
                style={Styles.preview}
            />
            <TouchableOpacity
                onPress={onRecordingClick}
                style={isRecording ? Styles.buttonStopRecording : Styles.buttonStartRecording}>

            </TouchableOpacity>
        </View>
    )
}

export default Camera;
