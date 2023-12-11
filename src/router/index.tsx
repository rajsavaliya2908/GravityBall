import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import appRoutes from './routes';
import LandingScreen from '../screen/landing';
import ControlScreen from '../screen/control';
import {RootStackParamList} from '../types/routes';
import DashboardScreen from '../screen/dashboard';

const Stack = createNativeStackNavigator<RootStackParamList>();

const screenOptions = {
  gestureEnabled: true,
  cardOverlayEnabled: true,
};

const noHeader = {headerShown: false};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={screenOptions}
        initialRouteName={appRoutes.Landing}>
        <Stack.Screen
          name={appRoutes.Control}
          component={ControlScreen}
          options={noHeader}
        />
        <Stack.Screen
          name={appRoutes.Landing}
          component={LandingScreen}
          options={noHeader}
        />
        <Stack.Screen
          name={appRoutes.Dashboard}
          component={DashboardScreen}
          options={noHeader}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
