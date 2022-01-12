import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home/Home';
import { Image, Text } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import plusIcon from '../Assets/Images/plus-icon.png';
const Tab = createBottomTabNavigator();

const HomeBottomTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarItemStyle: {
                backgroundColor: '#000'
            },
            tabBarActiveTintColor: '#fff'
        }}>
            <Tab.Screen
                name={"Home"}
                component={Home}
                options={{
                    tabBarIcon: ({color}) => (
                        <Entypo name={'home'} size={24} color={color} />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name={"Search"}
                component={Home}
                options={{
                    tabBarIcon: ({color}) => (
                        <AntDesign name={'search1'} size={24} color={color} />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name={"Upload"}
                component={Home}
                options={{
                    tabBarIcon: ({color}) => (
                        <Image source={plusIcon} style={{height: 30, resizeMode: 'contain'}} />
                    ),
                    headerShown: false,
                    tabBarLabel: () => null
                }}
            />
            <Tab.Screen
                name={"Inbox"}
                component={Home}
                options={{
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name={'message-minus'} size={24} color={color} />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name={"Profile"}
                component={Home}
                options={{
                    tabBarIcon: ({color}) => (
                        <AntDesign name={'user'} size={24} color={color} />
                    ),
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    );
}

export default HomeBottomTabNavigator;