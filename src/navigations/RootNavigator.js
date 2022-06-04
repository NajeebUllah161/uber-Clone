import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigators';

export default function RootNavigator() {
    return (
        <NavigationContainer>
            <DrawerNavigator />
        </NavigationContainer>
    )
}