import React, { useEffect, useState } from 'react';
import {View,
        TouchableWithoutFeedback,
        Text,
        Image,
        TouchableOpacity
        } from 'react-native';
import { Storage } from 'aws-amplify';
import Video from 'react-native-video';
import Styles from './Styles';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
const Post = (props) => {
    const [post, setPost] = useState(props.post);
    const [paused, setPaused] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [videoUri, setVideoUri] = useState('');
    const onPlayPausePress = () => {
        setPaused(!paused);
    };

    const onLikePress = () => {
        const likesToAdd = isLiked ? -1: 1;
        setIsLiked(!isLiked);
        setPost({
            ...post,
            likes: post.likes + likesToAdd
        })
    };

    const getVideoUri = async () => {
        if (post.videoUri.startsWith('http')) {
            setVideoUri(post.videoUri);
            return;
        }

        setVideoUri(await Storage.get(post.videoUri));
    }

    useEffect(() => {
        getVideoUri()
    }, [])
    return (
        <View>
            <TouchableWithoutFeedback onPress={onPlayPausePress}>
                <Video style={Styles.container}
                    source={{uri : videoUri}}
                    onError={(e) => console.log(e)}
                    style={Styles.video}
                    resizeMode={'cover'}
                    repeat={true}
                    paused={paused}
                />
            </TouchableWithoutFeedback>

            <View style={Styles.uiContainer}>
                <View style={Styles.rightContainer}>
                    <View style={Styles.profilePictureContainer}>
                        <Image style={Styles.profilePicture} source={{uri: post.user.imageUri}} />
                    </View>
                    <TouchableOpacity style={Styles.iconContainer} onPress={onLikePress}>
                        <AntDesign name={"heart"} size={30} color={isLiked? "red": "white"} />
                        <Text style={Styles.statsLabel}>{post.likes}</Text>
                    </TouchableOpacity>
                    <View style={Styles.iconContainer}>
                        <EvilIcons name={"comment"} size={30} color={"white"} />
                        <Text style={Styles.statsLabel}>{post.comments}</Text>
                    </View>
                    <View style={Styles.iconContainer}>
                        <Fontisto name={"share-a"} size={20} color={"white"} />
                        <Text style={Styles.statsLabel}>{post.shares}</Text>
                    </View>
                </View>
                <View style={Styles.bottomContainer}>
                    <View>
                        <Text style={Styles.handle}>{`@${post.user.userName}`}</Text>
                        <Text style={Styles.description}>{post.description}</Text>

                        <View style={Styles.songRow}>
                            {/* icon */}
                            <Entypo name={"beamed-note"} size={25} color={"white"} />
                            {/* name */}
                            <Text style={Styles.songName}>{post.song.name}</Text>
                        </View>
                    </View>
                    <Image style={Styles.songImage} source={{uri: post.song.imageUri}} />
                </View>
            </View>
        </View>
    )
}

export default Post;
