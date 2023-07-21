import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './screens/Login';
import Home from './screens/Home';
import CreateAccount from './screens/CreateAccount';
import Jobs from './screens/Jobs';
import CreateJob from './screens/CreateJob';
import Matchs from './screens/Matchs';
import MyPostulations from './screens/MyPostulations';
import Postulations from './screens/Postulations';
import Profile from './screens/Profile';
import Subscriptions from './screens/Subscriptions';
import Vacancies from './screens/Vacancies';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MyPostulations"
          component={MyPostulations}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateJob"
          component={CreateJob}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home Page' }}
        />
        <Stack.Screen
          name="Matchs"
          component={Matchs}
        />
        <Stack.Screen
          name="Postulations"
          component={Postulations}
        />
        <Stack.Screen
          name="Subscriptions"
          component={Subscriptions}
        />
        <Stack.Screen
          name="Vacancies"
          component={Vacancies}
        />
        <Stack.Screen name='Jobs' component={Jobs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}