import React, { useEffect, useRef, useState }from 'react';
import { View, TouchableOpacity, Text, TextInput } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import Styles from './Styles';
import { Storage, API, graphqlOperation, Auth } from 'aws-amplify';
import { createPost } from '../../graphql/mutations';
import { useRoute, useNavigation } from '@react-navigation/native';

const CreatePost = () => {

    const [description, setDescription] = useState("");
    const [videoKey, setVideoKey] = useState(null);
    const route = useRoute()
    const navigation = useNavigation();

    const uploadToStorage = async (videoPath) => {
        try {
            const response = await fetch(videoPath);

            const blob = await response.blob();

            const fileName = `${uuidv4()}.mp4`;
            const s3Response = await Storage.put(fileName, blob);

            setVideoKey(s3Response.key);
        } catch (error) {
            console.error(error);
        }
    }
    
    useEffect(() => {
        uploadToStorage(route.params.videoUri);
    }, [])


    const onPublish = async () => {
        // upload video to server
        //create post in the database using API
        if (!videoKey) {
            console.warn("Video not uploaded");
            return;
        }
        try {

            const userInfo = await Auth.currentAuthenticatedUser();
            const newPost = {
                videoUri: videoKey,
                description: description,
                userID: userInfo.attributes.sub,
                songID: '0a43683e-3e77-4099-b7da-4795e5d289ff'
            }
            const response = await API.graphql(graphqlOperation(
                createPost,
                { input: newPost}
            ));
            navigation.navigate("Home", { screen: "Home" });
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <View style={Styles.container}>
            <TextInput
                value={description}
                onChangeText={setDescription}
                numberOfLines={5}
                placeholder={"Description"}
                style={Styles.textInput}
            />
            <TouchableOpacity style={Styles.button} onPress={onPublish}>
                <Text style={Styles.buttonText}>Publish</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CreatePost;
