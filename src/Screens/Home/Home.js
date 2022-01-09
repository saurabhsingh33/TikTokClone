import React from 'react';
import { View, FlatList, Dimensions, SafeAreaView } from 'react-native';
import Post from '../../Components/Post/Post';
import Posts from '../../../data/Posts';

const Home = () => {
    return (
        <View>
            <FlatList
                data={Posts}
                renderItem={({ item }) => <Post post={item}/>}
                showsVerticalScrollIndicator={false}
                snapToInterval={Dimensions.get('window').height}
                snapToAlignment={"center"}
                decelerationRate={"fast"}
            />
        </View>
    )
}

export default Home;
