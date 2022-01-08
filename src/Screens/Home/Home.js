import React from 'react';
import { View } from 'react-native';
import Post from '../../Components/Post/Post';

const post = {
    id: 'p1',
    user: {
        id: 'u1',
        username: 'saurabh',
        userImage: 'https://www.sukhbeerbrar.com/en/wp-content/uploads/2021/04/186247435_1251996401883943_5719150641484314970_n.jpg'
    },
    videoUri: 'https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4',
    description: 'My awesome post',
    song: 'Love me',
    songImage: 'https://www.sukhbeerbrar.com/en/wp-content/uploads/2021/04/186247435_1251996401883943_5719150641484314970_n.jpg',
    likes: 123,
    comments: 15,
    shares: 10,
}
const Home = () => {
    return (
        <View>
            <Post post={post}/>
        </View>
    )
}

export default Home;
