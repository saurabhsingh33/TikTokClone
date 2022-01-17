import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text
} from 'react-native';

import RootNavigation from './src/Navigation/Navigation';
import { withAuthenticator } from 'aws-amplify-react-native';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { createUser } from './src/graphql/mutations';
import { getUser } from './src/graphql/queries';

const randomImages = [
  'http://images6.fanpop.com/image/photos/37300000/Random-Girl-people-37325426-236-354.jpg',
  'https://data.whicdn.com/images/180130458/original.jpg',
  'https://cdn.freeyork.org/wp-content/uploads/2016/12/lance-phan-9.jpg',
  'https://www.businessinsider.in/photo/22842624/tim-cook-sure-is-following-a-lot-of-random-people-on-twitter.jpg',
  'https://data.whicdn.com/images/315372501/original.jpg',
  'https://i.pinimg.com/originals/5d/9f/2d/5d9f2d8d76428a6966ba7ed91bc045c0.jpg',
  'https://i.pinimg.com/736x/ee/a4/0c/eea40c6ce4f241d6214f3f40943e6630.jpg'
]

const getRandomImage = () => {
  return randomImages[Math.floor(Math.random() * randomImages.length)];
}

const App = () => {

  useEffect(() => {
    const fetchUser = async () => {
      // get currently authenticated user
      const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });
      console.log(userInfo);
      if (!userInfo) {
        return;
      }
      // check if user exist in database
      const getUserInfo = await API.graphql(graphqlOperation(
        getUser,
        { id: userInfo.attributes.sub }
      ))

      if (getUserInfo.data.getUser) {
        console.log('User already exists in database');
        return;
      }
      // if it does not
      // create new user in database
      const newUser = {
        id: userInfo.attributes.sub,
        userName: userInfo.username,
        email: userInfo.attributes.email,
        imageUri: getRandomImage(),
      }

      await API.graphql(graphqlOperation(
        createUser,
        { input: newUser }
      ))
    };
    fetchUser();
  }, []);

  return (
    <>
      <StatusBar barStyle={"light-content"} />
      <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
        <RootNavigation />
      </SafeAreaView>
    </>
  );
};

export default withAuthenticator(App);
