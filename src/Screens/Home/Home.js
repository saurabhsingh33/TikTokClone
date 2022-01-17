import React, { useEffect, useState } from 'react';
import { View, FlatList, Dimensions, SafeAreaView } from 'react-native';
import Post from '../../Components/Post/Post';
import { API, graphqlOperation } from 'aws-amplify';
import { listPosts } from '../../graphql/queries';

const Home = () => {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
            // fetch all posts
            try {
                const response = await API.graphql(graphqlOperation(listPosts));
                setPosts(response.data.listPosts.items);
            } catch (error) {
                console.error(error);
            }
        }
        fetchPosts();
    }, []);

    return (
        <View>
            <FlatList
                data={posts}
                renderItem={({item}) => <Post post={item}/>}
                showsVerticalScrollIndicator={false}
                snapToInterval={Dimensions.get('window').height - 60}
                snapToAlignment={"center"}
                decelerationRate={"fast"}
            />
        </View>
    )
}

export default Home;
