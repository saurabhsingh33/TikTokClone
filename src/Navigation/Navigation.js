import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeBottomTabNavigator from './HomeBottomTabNavigator';
import CreatePost from '../Screens/CreatePost/CreatePost';
const Stack = createStackNavigator();

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                    <Stack.Screen
                        name="HomeScreen"
                        component={HomeBottomTabNavigator}
                    />
                    <Stack.Screen
                        options={{
                            headerShown: true,
                            title: 'Post'
                        }}
                        name="CreatePost"
                        component={CreatePost}
                    />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation;
